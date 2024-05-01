'use client'
import { createContext, useContext, useEffect } from 'react';

interface IFacebookPixelContext {
  track: (eventName: string) => void;
}

const FacebookPixelContext = createContext<IFacebookPixelContext>({
  track: () => {}
});

export const useFacebookPixel = () => {
  const context = useContext(FacebookPixelContext);
  if (!context) {
    throw new Error('useFacebookPixel must be used within a FacebookPixelProvider');
  }
  return context;
}

const useFacebookPixelContext = () => {
  useEffect(() => {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    fbq("init", process.env.FACEBOOK_PIXEL_ID);
  }, []);

  const track = (eventName: string) => {
    fbq('track', eventName);
  }

  return {
    track
  }
}

export const FacebookPixelProvider = ({ children }) => {
  const value = useFacebookPixelContext();

  return (
    <FacebookPixelContext.Provider value={value}>
      {children}
    </FacebookPixelContext.Provider>
  );
}