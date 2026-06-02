// figma node: 1:268 (FRAME) "Button"
export default function Button() {
  return (
    <div data-name="Button" style={{
      position: "relative",
      width: 69.5,
      height: 48,
      borderRadius: 32,
      backgroundColor: "rgb(233,116,81)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div data-name="Background" style={{
        position: "absolute",
        left: 22.75,
        top: 12,
        width: 24,
        height: 24,
        borderRadius: 9999,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div data-name="Container" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <div data-name="Img" style={{
            position: "absolute",
            left: 4.125,
            top: 5,
            width: 15.75,
            height: 14,
          }}>
            <img src="./Vector.svg" alt="Vector" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 15.749,
              height: 14,
              backgroundColor: "rgb(176,224,230)",
              color: "rgb(176,224,230)",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}
