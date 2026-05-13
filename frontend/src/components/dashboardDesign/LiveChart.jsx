import React, { useEffect, useRef } from "react";
import { useSearchBar } from "../../contexts/searchBar/searchContext";

function TradingViewWidget() {
  const { searchBarState } = useSearchBar();
  const symbol = searchBarState.selectedSymbol;
  const container = useRef();

  useEffect(() => {
    // Use AAPL as default if no symbol is selected
    const symbolToUse = symbol || "AAPL";

    const cleanupWidget = () => {
      const existingScript = document.getElementById("tradingview-script");
      if (existingScript) {
        existingScript.remove();
      }
      if (container.current) {
        container.current.innerHTML = "";
      }
    };

    // Clean up existing widget before creating new one
    cleanupWidget();

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.id = "tradingview-script";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": false,
        "symbol": "${symbolToUse}",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": false,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;

    container.current?.appendChild(script);

    return cleanupWidget;
  }, [symbol]);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100vh" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "100vh" }}
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default TradingViewWidget;
