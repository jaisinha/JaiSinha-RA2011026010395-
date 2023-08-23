import React from "react";
import "./Form.css";
const Form = ({
  targetElement,
  tooltipText,
  textSize,
  padding,
  textColor,
  backgroundColor,
  cornerRadius,
  tooltipWidth,
  arrowWidth,
  arrowHeight,
  handleInputChange,
}) => {
  return (
    <div
      className="form-container"
      style={{
        margin: "20px 30px",
        width: "643px",
        height: "612px",
        border: "1px solid #00000026",
        padding: "20px",
      }}
    >
      <form>
        <div className="form-group">
          <label htmlFor="targetElement">Target Element:</label>
          <br />
          <select
            id="targetElement"
            name="targetElement"
            value={targetElement}
            onChange={(e) => handleInputChange("targetElement", e.target.value)}
            style={{
              width: "547.56px",
              height: "32px",
              padding: "0px 12px 0px 12px",
              borderRadius: "4px",
              border: "1px solid",
              gap: "4px",
              background:
                "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))",
            }}
          >
            <option value="button1">Button 1</option>
            <option value="button2">Button 2</option>
            <option value="button3">Button 3</option>
            <option value="button4">Button 4</option>
            <option value="button5">Button 5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tooltipText">Tooltip Text</label>
          <br />
          <input
            type="text"
            id="tooltipText"
            name="tooltipText"
            value={tooltipText}
            onChange={(e) => handleInputChange("tooltipText", e.target.value)}
            style={{
              width: "547.56px",
              height: "39px",
              top: "-20px",
              left: "-482.755126953125px",
              padding: "0px 12px 10px 12px",
              margin: "12px",
              borderRadius: "6px",
              border: "1px solid #00000026",
              gap: "10px",
              background:
                "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))",
            }}
          />
        </div>
        <div className="form-group">
          <label style={{ display: "block" }} htmlFor="textSize">
            Text Size:
          </label>
          <input
            style={{
              display: "inline-flex",
              width: "236.22px",
              height: "39px",
              top: "-131px",
              left: "-482.755126953125px",
              padding: "0px 20px 5px 12px",
              borderRadius: "6px",
              border: "1px solid #00000026",
              margin: "12px",
              gap: "12px",
              background:
                "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))",
            }}
            type="text"
            id="textSize"
            name="textSize"
            value={textSize}
            onChange={(e) => handleInputChange("textSize", e.target.value)}
          />

          <label style={{ display: "block" }} htmlFor="padding">
            Padding:
          </label>
          <input
            style={{
              display: "inline-flex",
              width: "216.22px",
              height: "39px",
              top: "-131px",
              // margin: "20px",
              marginRight: "30px",

              left: "-179.90325927734375px",
              padding: "0px 10px 10px 12px",
              borderRadius: "6px",
              border: "1px solid #00000026",

              background:
                "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))",
            }}
            type="text"
            id="padding"
            name="padding"
            value={padding}
            onChange={(e) => handleInputChange("padding", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="textColor">Text Color:</label>
          <br />
          <input
            type="color"
            id="textColor"
            name="textColor"
            value={textColor}
            onChange={(e) => handleInputChange("textColor", e.target.value)}
            style={{
              display: "inline-block",
              width: "500.22px",
              height: "39px",
              top: "-131px",
              marginBottom: "0",
              left: "-179px",
              padding: "0px 5px 10px 12px",
              // padding-bottom:"10px",
              border: "1px solid #00000026",
              gap: "12px",
              background:
                "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))",
            }}
          />
        </div>
        <div
          style={{ padding: "0px 20px -5px 12px", margin: "12px" }}
          className="form-group"
        >
          <label htmlFor="backgroundColor">Background Color: </label>
          <br />

          <div className="i">
            <input
              type="color"
              id="backgroundColor"
              name="backgroundColor"
              value={backgroundColor}
              onChange={(e) =>
                handleInputChange("backgroundColor", e.target.value)
              }
              style={{ width: "500px" }}
            />
          </div>
        </div>
        <div style={{ padding: "20px" }} className="form-group">
          <label htmlFor="cornerRadius">Corner Radius:</label>
          {/* <br /> */}
          <input
            type="text"
            id="cornerRadius"
            name="cornerRadius"
            value={cornerRadius}
            onChange={(e) => handleInputChange("cornerRadius", e.target.value)}
          />
        </div>
        <div style={{ padding: "20px" }} className="form-group">
          <label htmlFor="tooltipWidth">Tooltip Width:</label>

          <input
            type="text"
            id="tooltipWidth"
            name="tooltipWidth"
            value={tooltipWidth}
            onChange={(e) => handleInputChange("tooltipWidth", e.target.value)}
          />
        </div>
        <div
          style={{ display: "inline-flex", padding: "20px" }}
          className="form-group"
        >
          <label htmlFor="arrowWidth">Arrow Width:</label>

          <input
            type="text"
            id="arrowWidth"
            name="arrowWidth"
            value={arrowWidth}
            onChange={(e) => handleInputChange("arrowWidth", e.target.value)}
          />
        </div>

        <div
          style={{ display: "inline-flex", padding: "20px" }}
          className="form-group"
        >
          <label htmlFor="arrowHeight">Arrow Height:</label>

          <input
            type="text"
            id="arrowHeight"
            name="arrowHeight"
            value={arrowHeight}
            onChange={(e) => handleInputChange("arrowHeight", e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
