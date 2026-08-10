import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { useHasDynamicIsland } from '../hooks/useHasDynamicIsland';
import { useTheme } from './ThemeContext';
import { navLinks } from '../data/portfolio';

const IslandContext = createContext(null);
const sectionIds = navLinks.map((link) => link.id);

export function IslandProvider({ children }) {
  const { activeId, progress, scrolled } = useActiveSection(sectionIds);
  const { theme } = useTheme();
  const hasIsland = useHasDynamicIsland();

  const [mode, setMode] = useState('compact'); // 'compact' | 'expanded' | 'notify'
  const [notification, setNotification] = useState(null);

  const notifyTimer = useRef(null);
  const clearTimer = useRef(null);

  // Mirrors `mode`, but updated synchronously inside the state updater itself
  // (not via a separate useEffect) so code that fires in the same tick as a
  // mode change — e.g. the theme-watch effect below — always reads the
  // current value instead of a one-tick-stale one.
  const modeRef = useRef(mode);

  const setModeSynced = useCallback((next) => {
    setMode((prev) => {
      const value = typeof next === 'function' ? next(prev) : next;
      modeRef.current = value;
      return value;
    });
  }, []);

  const clearTimers = useCallback(() => {
    if (notifyTimer.current) clearTimeout(notifyTimer.current);
    if (clearTimer.current) clearTimeout(clearTimer.current);
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const notify = useCallback(
    (message, icon = 'spark', duration = 2400) => {
      if (!hasIsland) return; // nothing to show it on — skip the timers entirely
      clearTimers();
      setNotification({ message, icon });
      setModeSynced('notify');
      notifyTimer.current = setTimeout(() => {
        setModeSynced('compact');
        clearTimer.current = setTimeout(() => setNotification(null), 420);
      }, duration);
    },
    [hasIsland, clearTimers, setModeSynced]
  );

  const expand = useCallback(() => {
    clearTimers();
    setModeSynced('expanded');
  }, [clearTimers, setModeSynced]);

  const collapse = useCallback(() => {
    clearTimers();
    setModeSynced((m) => (m === 'expanded' ? 'compact' : m));
  }, [clearTimers, setModeSynced]);

  const toggle = useCallback(() => {
    clearTimers();
    setModeSynced((m) => (m === 'expanded' ? 'compact' : 'expanded'));
  }, [clearTimers, setModeSynced]);

  // Welcome notification, once, shortly after first paint — but only if the
  // island is still untouched by then. Firing unconditionally would yank the
  // panel away from anyone who opens it in that first second.
  useEffect(() => {
    const t = setTimeout(() => {
      if (modeRef.current !== 'compact') return;
      notify('Welcome — feel free to look around', 'spark', 3000);
    }, 1100);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Contextual toast whenever the theme actually changes, unless the island
  // menu is open. Compared by value (not a "have we mounted" flag) so
  // StrictMode's dev-only double-invoke of this effect — which re-runs the
  // same theme value rather than a new one — can't misread itself as a change.
  const prevTheme = useRef(theme);
  useEffect(() => {
    if (prevTheme.current === theme) return;
    prevTheme.current = theme;
    if (modeRef.current === 'expanded') return;
    notify(theme === 'dark' ? 'Night mode on' : 'Day mode on', theme === 'dark' ? 'moon' : 'sun', 1800);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const value = useMemo(
    () => ({ activeId, progress, scrolled, hasIsland, mode, notification, notify, expand, collapse, toggle }),
    [activeId, progress, scrolled, hasIsland, mode, notification, notify, expand, collapse, toggle]
  );

  return <IslandContext.Provider value={value}>{children}</IslandContext.Provider>;
}

export function useIsland() {
  const ctx = useContext(IslandContext);
  if (!ctx) throw new Error('useIsland must be used within an IslandProvider');
  return ctx;
}
