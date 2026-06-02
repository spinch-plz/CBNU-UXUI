// figma node: 1:4 (SYMBOL) "Status bar"
export default function StatusBar(props = {}) {
  return (
    <div data-name="Status bar" style={{
      position: "relative",
      width: 390,
      height: 59,
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "11px 16px 11px 16px",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div data-name="Time" style={{
        position: "absolute",
        left: 16,
        top: 18.5,
        width: 110.5,
        height: 22,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <span data-name="Time" style={{
          position: "absolute",
          left: 36.75,
          top: 1,
          width: 37,
          height: 22,
          fontFamily: "SF Pro",
          fontWeight: 700,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "22px",
          color: "rgb(0,0,0)",
        }}>9:41</span>
      </div>
      <div data-name="Dynamic Island spacer" style={{
        position: "absolute",
        left: 132.5,
        top: 11,
        width: 125,
        height: 37,
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }} />
      <div data-name="Levels" style={{
        position: "absolute",
        left: 263.5,
        top: 18.5,
        width: 110.5,
        height: 22,
        display: "flex",
        flexDirection: "row",
        gap: 7,
        padding: "1px 0px 1px 0px",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div data-name="Cellular Connection" style={{
          position: "absolute",
          left: 16.415,
          top: 5.387,
          width: 19.2,
          height: 12.226,
          backgroundColor: "rgb(0,0,0)",
        }} /> {/* VECTOR: empty geometry */}
        <div data-name="Wifi" style={{
          position: "absolute",
          left: 42.615,
          top: 5.336,
          width: 17.142,
          height: 12.328,
          backgroundColor: "rgb(0,0,0)",
        }} /> {/* VECTOR: empty geometry */}
        <div data-name="Battery" style={{
          position: "absolute",
          left: 66.757,
          top: 5,
          width: 27.328,
          height: 13,
          overflow: "hidden",
        }}>
          <div data-name="Border" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 25,
            height: 13,
            opacity: 0.35,
            borderRadius: 4.300000190734863,
            border: "1px solid rgb(0,0,0)",
          }} />
          <div data-name="Cap" style={{
            position: "absolute",
            left: 26,
            top: 4.781,
            width: 1.328,
            height: 4.075,
            opacity: 0.4,
            backgroundColor: "rgb(0,0,0)",
          }} /> {/* VECTOR: empty geometry */}
          <div data-name="Capacity" style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 21,
            height: 9,
            borderRadius: 2.5,
            backgroundColor: "rgb(0,0,0)",
          }} />
        </div>
      </div>
    </div>
  );
}
