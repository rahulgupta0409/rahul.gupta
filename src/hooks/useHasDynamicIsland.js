import { useEffect, useState } from 'react';

// Dynamic Island iPhones (14 Pro / 14 Pro Max, and the 15/16 lines) report a
// 59pt top safe-area inset. Notch-only iPhones top out at 50pt (12/13 mini),
// most sit at 44-47pt, and non-notch phones (SE) report 0-20pt. There's no
// direct "hasDynamicIsland" API, so this — iPhone + a 59pt+ inset — is the
// standard client-side proxy for it.
function detectDynamicIsland() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false;

  const isIphone = /iPhone/.test(window.navigator.userAgent);
  if (!isIphone) return false;

  const probe = document.createElement('div');
  probe.style.cssText =
    'position:fixed;top:0;left:0;height:0;width:0;padding-top:env(safe-area-inset-top);visibility:hidden;pointer-events:none;';
  document.body.appendChild(probe);
  const inset = parseFloat(getComputedStyle(probe).paddingTop) || 0;
  document.body.removeChild(probe);

  return inset >= 59;
}

export function useHasDynamicIsland() {
  const [hasIsland, setHasIsland] = useState(false);

  useEffect(() => {
    setHasIsland(detectDynamicIsland());

    // Re-check on rotation — Safari can report the safe-area inset a frame
    // or two after orientationchange fires, so give it a beat.
    function handleOrientationChange() {
      window.setTimeout(() => setHasIsland(detectDynamicIsland()), 150);
    }

    window.addEventListener('orientationchange', handleOrientationChange);
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, []);

  return hasIsland;
}
