// figma node: 1:111 (FRAME) "Background+Border+Shadow"
export default function BackgroundBorderShadow(props = {}) {
  return (
    <div data-name="Background+Border+Shadow" style={{
      position: "relative",
      width: 56,
      height: 56,
      borderRadius: 9999,
      backgroundColor: "rgb(233,116,81)",
      boxShadow: "0px 0px 15px 0px rgba(255,205,0,0.1)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div data-name="Container" style={{
        position: "absolute",
        left: 14.416,
        top: 12,
        width: 27.169,
        height: 32,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <span data-name="Symbol" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 27.169,
          height: 32,
          fontFamily: "Font Awesome 5 Free",
          fontSize: 24,
          textAlign: "center",
          lineHeight: "32px",
          color: "rgb(176,224,230)",
        }}>{props.container_symbolText ?? ""}</span>
      </div>
    </div>
  );
}
