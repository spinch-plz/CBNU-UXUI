import Vector161 from "./Vector161/Vector161.jsx";
import Vector57 from "./Vector57/Vector57.jsx";
import Vector98Stroke from "./Vector98Stroke/Vector98Stroke.jsx";
import StatusBar from "/test/external/StatusBar/StatusBar.jsx";
import Button from "./Button/Button.jsx";
import HomeIndicator from "/test/external/HomeIndicator/HomeIndicator.jsx";

// figma node: 1:177 (FRAME) "C"
export default function C() {
  return (
    <div data-name="C" style={{
      position: "relative",
      width: 390,
      height: 887,
      overflow: "hidden",
      backgroundColor: "rgb(176,224,230)",
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 131,
        width: 390,
        height: 630,
        display: "flex",
        flexDirection: "column",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 390,
          height: 298,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "16px 32px 16px 32px",
        }}>
          <div style={{
            position: "absolute",
            left: 32,
            top: 16,
            width: 326,
            height: 266,
            overflow: "hidden",
            borderRadius: 12,
            backgroundColor: "rgb(233,116,81)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: "32px 64px 32px 64px",
            alignItems: "center",
          }}>
            <div style={{
              position: "absolute",
              left: 99,
              top: 32,
              width: 128,
              height: 128,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 14,
                top: 9.681,
                width: 100,
                height: 108.639,
                overflow: "hidden",
              }}>
                <img data-name="Vector 165 (Stroke)" src="./Vector-165-Stroke.svg" alt="Vector 165 (Stroke)" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 100,
                  height: 102.749,
                  backgroundColor: "rgb(176,224,230)",
                  color: "rgb(176,224,230)",
                }} />
                <div style={{
                  position: "absolute",
                  left: 35.148,
                  top: 36.334,
                  width: 32.414,
                  height: 72.305,
                  overflow: "hidden",
                }}>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Vector161 key={i} />
                  ))} {/* 4× → /test/C/Vector161/Vector161.jsx */}
                </div>
              </div>
            </div>
            <div data-name="Shadow" style={{
              position: "absolute",
              left: 65.5,
              top: 180,
              width: 195,
              height: 60,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
              <span data-name="7 Days!" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 195,
                height: 60,
                fontFamily: "HGSisuns_Pro",
                fontSize: 60,
                textAlign: "center",
                lineHeight: "60px",
                letterSpacing: "-3px",
                color: "rgb(176,224,230)",
              }}>DAY + 7</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 298,
          width: 390,
          height: 112,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "12px 32px 12px 32px",
        }}>
          <div style={{
            position: "absolute",
            left: 32,
            top: 12,
            width: 326,
            height: 88,
            overflow: "hidden",
            borderRadius: 12,
            border: "2px solid rgb(233,116,81)",
            display: "flex",
            flexDirection: "row",
            padding: "20px 20px 20px 20px",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <div data-name="Container" style={{
              position: "absolute",
              left: 20,
              top: 16,
              width: 129,
              height: 56,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}>
              <div data-name="Heading 3" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 129,
                height: 56,
                display: "flex",
                flexDirection: "column",
              }}>
                <span data-name="1-Min Neck Stretch" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 129,
                  height: 56,
                  fontFamily: "Pretendard",
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: "28px",
                  letterSpacing: "-0.002em",
                  color: "rgb(233,116,81)",
                }}>
                  {"오늘의 스트레칭을\n진행하세요!"}
                </span>
              </div>
            </div>
            <img data-name="exercise" src="./exercise.svg" alt="exercise" style={{
              position: "absolute",
              left: 151.5,
              top: -8,
              width: 104,
              height: 104,
              opacity: 0.3,
              backgroundColor: "rgb(233,116,81)",
              color: "rgb(233,116,81)",
            }} />
            <div data-name="Button" style={{
              position: "absolute",
              left: 258,
              top: 20,
              width: 48,
              height: 48,
              borderRadius: 9999,
              backgroundColor: "rgb(233,116,81)",
              display: "flex",
              flexDirection: "row",
              padding: "0px 16px 0px 20px",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <div data-name="Container" style={{
                position: "absolute",
                left: 20,
                top: 16,
                width: 12,
                height: 16,
                display: "flex",
                flexDirection: "column",
              }}>
                <div data-name="Img" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 12,
                  height: 16,
                }}>
                  <svg width={12} height={14.002} viewBox="0 0 12 14.002" fill="rgb(176,224,230)" style={{
                    position: "absolute",
                    left: 0,
                    top: 0.998,
                    width: 12,
                    height: 14.002,
                    backgroundColor: "rgb(176,224,230)",
                  }}>
                    <path d="M 2.281 0.221 C 1.819 -0.064 1.237 -0.073 0.766 0.192 C 0.294 0.458 0 0.958 0 1.502 L 0 12.502 C 0 13.046 0.294 13.546 0.766 13.811 C 1.237 14.077 1.819 14.064 2.281 13.783 L 11.281 8.283 C 11.728 8.011 12 7.527 12 7.002 C 12 6.477 11.728 5.996 11.281 5.721 L 2.281 0.221 Z" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 410,
          width: 390,
          height: 220,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 32px 12px 32px",
          alignItems: "center",
        }}>
          <div data-name="Container" style={{
            position: "absolute",
            left: 32,
            top: 12,
            width: 326,
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 137.1699981689453,
            padding: "0px 12px 0px 12px",
            alignItems: "center",
          }}>
            <div data-name="Heading 3" style={{
              position: "absolute",
              left: 12,
              top: 0,
              width: 56,
              height: 24,
              display: "flex",
              flexDirection: "column",
            }}>
              <span data-name="Daily Summary" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 56,
                height: 24,
                fontFamily: "Pretendard",
                fontWeight: 700,
                fontSize: 16,
                lineHeight: "24px",
                letterSpacing: "0.009em",
                color: "rgb(233,116,81)",
              }}>하루기록</span>
            </div>
            <div data-name="Button" style={{
              position: "absolute",
              left: 205.17,
              top: 4,
              width: 74,
              height: 16,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 38.5,
            top: 40,
            width: 313,
            height: 168,
            display: "flex",
            flexDirection: "row",
            gap: 16,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <div data-name="Overlay+Border+Shadow+OverlayBlur" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 149,
              height: 168,
              overflow: "hidden",
              borderRadius: 12,
              border: "2px solid rgb(233,116,81)",
              display: "flex",
              flexDirection: "column",
              gap: -0.5,
              padding: "16px 16px 16px 16px",
            }}>
              <div data-name="Margin" style={{
                position: "absolute",
                left: 16,
                top: 16,
                width: 40,
                height: 52,
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 12px 0px",
              }}>
                <div data-name="Overlay" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 40,
                  height: 40,
                  borderRadius: 9999,
                  backgroundColor: "rgb(233,116,81)",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <div data-name="Container" style={{
                    position: "absolute",
                    left: 13,
                    top: 12,
                    width: 14,
                    height: 16,
                    display: "flex",
                    flexDirection: "column",
                  }}>
                    <span data-name="Symbol" style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 14,
                      height: 16,
                      fontFamily: "Font Awesome 5 Free",
                      fontSize: 16,
                      lineHeight: "16px",
                      letterSpacing: "0.500em",
                      color: "rgb(176,224,230)",
                    }}></span>
                  </div>
                </div>
              </div>
              <div style={{
                position: "absolute",
                left: 16,
                top: 67.5,
                width: 117,
                height: 80,
                display: "flex",
                flexDirection: "column",
              }}>
                <div data-name="Margin" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 117,
                  height: 24,
                  display: "flex",
                  flexDirection: "column",
                  padding: "0px 0px 4px 0px",
                }}>
                  <div data-name="Container" style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 117,
                    height: 20,
                    display: "flex",
                    flexDirection: "column",
                  }}>
                    <span data-name="Posture Maint." style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 117,
                      height: 20,
                      fontFamily: "Pretendard",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: "rgb(233,116,81)",
                    }}>자세 유지</span>
                  </div>
                </div>
                <div data-name="Paragraph" style={{
                  position: "absolute",
                  left: 0,
                  top: 24,
                  width: 117,
                  height: 32,
                  display: "flex",
                  flexDirection: "row",
                  gap: 4,
                  alignItems: "baseline",
                }}>
                  <span data-name="4.2" style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 37,
                    height: 32,
                    fontFamily: "HGSisuns_Pro",
                    fontSize: 24,
                    lineHeight: "32px",
                    letterSpacing: "0.017em",
                    color: "rgb(233,116,81)",
                  }}>4.2</span>
                  <span data-name="Hours" style={{
                    position: "absolute",
                    left: 41,
                    top: 11,
                    width: 34.166,
                    height: 16,
                    fontFamily: "Pretendard",
                    fontWeight: 700,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: "rgb(233,116,81)",
                  }}>시간</span>
                </div>
                <div data-name="Margin" style={{
                  position: "absolute",
                  left: 0,
                  top: 56,
                  width: 117,
                  height: 24,
                  display: "flex",
                  flexDirection: "column",
                  padding: "16px 0px 16px 0px",
                }}>
                  <div data-name="Background" style={{
                    position: "absolute",
                    left: 0,
                    top: 16,
                    width: 117,
                    height: 8,
                    overflow: "hidden",
                    borderRadius: 9999,
                    border: "1px solid rgb(233,116,81)",
                  }}>
                    <div data-name="Background" style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 81.9,
                      height: 8,
                      borderRadius: 9999,
                      backgroundColor: "rgb(233,116,81)",
                    }} />
                  </div>
                </div>
              </div>
            </div>
            <div data-name="Overlay+Border+Shadow+OverlayBlur" style={{
              position: "absolute",
              left: 165,
              top: 0,
              width: 148,
              height: 168,
              overflow: "hidden",
              borderRadius: 12,
              border: "2px solid rgb(233,116,81)",
              display: "flex",
              flexDirection: "column",
              gap: -0.5,
              padding: "16px 16px 16px 16px",
            }}>
              <div data-name="Margin" style={{
                position: "absolute",
                left: 16,
                top: 16,
                width: 40,
                height: 52,
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 12px 0px",
              }}>
                <div data-name="Overlay" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 40,
                  height: 40,
                  borderRadius: 9999,
                  backgroundColor: "rgb(233,116,81)",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <div data-name="Container" style={{
                    position: "absolute",
                    left: 13,
                    top: 12,
                    width: 14,
                    height: 16,
                    display: "flex",
                    flexDirection: "column",
                  }}>
                    <span data-name="Symbol" style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 14,
                      height: 16,
                      fontFamily: "Font Awesome 5 Free",
                      fontSize: 16,
                      lineHeight: "16px",
                      letterSpacing: "0.500em",
                      color: "rgb(176,224,230)",
                    }}></span>
                  </div>
                </div>
              </div>
              <div style={{
                position: "absolute",
                left: 16,
                top: 67.5,
                width: 116,
                height: 80,
                display: "flex",
                flexDirection: "column",
              }}>
                <div data-name="Margin" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 116,
                  height: 24,
                  display: "flex",
                  flexDirection: "column",
                  padding: "0px 0px 4px 0px",
                }}>
                  <div data-name="Container" style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 116,
                    height: 20,
                    display: "flex",
                    flexDirection: "column",
                  }}>
                    <span data-name="Alarms Reacted" style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 116,
                      height: 20,
                      fontFamily: "Pretendard",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: "rgb(233,116,81)",
                    }}>알림에 반응</span>
                  </div>
                </div>
                <div data-name="Paragraph" style={{
                  position: "absolute",
                  left: 0,
                  top: 24,
                  width: 116,
                  height: 32,
                  display: "flex",
                  flexDirection: "row",
                  gap: 4,
                  alignItems: "baseline",
                }}>
                  <span data-name="5/6" style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 40,
                    height: 32,
                    fontFamily: "HGSisuns_Pro",
                    fontSize: 24,
                    lineHeight: "32px",
                    letterSpacing: "0.007em",
                    color: "rgb(233,116,81)",
                  }}>5/6</span>
                  <span data-name="Today" style={{
                    position: "absolute",
                    left: 44,
                    top: 11,
                    width: 21,
                    height: 16,
                    fontFamily: "Pretendard",
                    fontWeight: 700,
                    fontSize: 12,
                    lineHeight: "16px",
                    letterSpacing: "0.009em",
                    color: "rgb(233,116,81)",
                  }}>하루</span>
                </div>
                <div data-name="Margin" style={{
                  position: "absolute",
                  left: 0,
                  top: 56,
                  width: 116,
                  height: 24,
                  display: "flex",
                  flexDirection: "column",
                  padding: "16px 0px 16px 0px",
                }}>
                  <div data-name="Background" style={{
                    position: "absolute",
                    left: 0,
                    top: 16,
                    width: 116,
                    height: 8,
                    overflow: "hidden",
                    borderRadius: 9999,
                    border: "1px solid rgb(233,116,81)",
                  }}>
                    <div data-name="Background" style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 96.275,
                      height: 8,
                      borderRadius: 9999,
                      backgroundColor: "rgb(233,116,81)",
                    }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 59,
        width: 390,
        height: 72,
        background: "linear-gradient(rgb(176,224,230),rgb(176,224,230)), linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0))",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{
          position: "absolute",
          left: 12,
          top: 20,
          width: 100,
          height: 32,
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 32,
            height: 32,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 8.127,
              width: 32,
              height: 15.746,
              overflow: "hidden",
            }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <Vector57 key={i} />
              ))} {/* 8× → /test/C/Vector57/Vector57.jsx */}
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 36,
            top: 0,
            width: 64,
            height: 32,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 2.654,
              width: 64,
              height: 26.692,
              overflow: "hidden",
            }}>
              {Array.from({ length: 11 }).map((_, i) => (
                <Vector98Stroke key={i} />
              ))} {/* 11× → /test/C/Vector98Stroke/Vector98Stroke.jsx */}
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 346,
          top: 20,
          width: 32,
          height: 32,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "10px 10px 10px 10px",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <span data-name="Symbol" style={{
            position: "absolute",
            left: 10,
            top: 8,
            width: 12,
            height: 16,
            fontFamily: "Font Awesome 5 Free",
            fontSize: 16,
            textAlign: "center",
            lineHeight: "16px",
            letterSpacing: "0.500em",
            color: "rgb(233,116,81)",
          }}></span>
        </div>
      </div>
      <StatusBar data-name="Status bar"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 390,
          height: 59,
        }}
        overrideFill="rgba(255,255,255,0)"
      /> {/* → /test/external/StatusBar/StatusBar.jsx */}
      <div style={{
        position: "absolute",
        left: 0,
        top: 777,
        width: 390,
        height: 110,
        backgroundColor: "rgb(176,224,230)",
        display: "flex",
        flexDirection: "column",
      }}>
        <div data-name="Nav" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 390,
          height: 76,
          display: "flex",
          flexDirection: "column",
          padding: "0px 32px 0px 32px",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <div data-name="Overlay+Border+OverlayBlur" style={{
            position: "absolute",
            left: 32,
            top: 6,
            width: 326,
            height: 64,
            overflow: "hidden",
            borderRadius: 32,
            border: "2px solid rgb(233,116,81)",
            display: "flex",
            flexDirection: "row",
            padding: "8px 24px 8px 24px",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <Button key={i} />
            ))} {/* 4× → /test/C/Button/Button.jsx */}
          </div>
        </div>
        <HomeIndicator data-name="Home Indicator"
          style={{
            position: "absolute",
            left: 0,
            top: 76,
            width: 390,
            height: 34,
          }}
          overrideFill="rgba(255,255,255,0)"
        /> {/* → /test/external/HomeIndicator/HomeIndicator.jsx */}
      </div>
    </div>
  );
}
