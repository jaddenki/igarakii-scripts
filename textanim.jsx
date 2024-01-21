// 运行 After Effects 脚本
var window = new Window("palette", "My Window", undefined);
window.orientation = "column";

var text = window.add("statictext", undefined, "JAJASCRIPT");
var group = window.add("group", undefined, "");
group.orientation = "row";
var buttonOne = group.add("button", undefined, "T");
var buttonTwo = group.add("button", undefined, "poopoo");


var panel = window.add("panel", undefined, "shapes");

var circle = panel.add("button", undefined, 0)
buttonOne.size = [25,25];

var textbox = window.add("edittext", undefined, "text")
var slider = window.add("slider", undefined, "value")

window.center();
window.show();

buttonOne.onClick = function addCircle() {
    // Create a new composition if needed
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) {
        comp = app.project.items.addComp('New Composition', 1920, 1080, 1.0, 10, 30);
    }

    var shapeLayer = comp.layers.addShape();
    shapeLayer.name = 'circle';
    var ellipseGroup = shapeLayer.property("Contents").addProperty("ADBE Vector Group");
    ellipseGroup.name = "circle";

    var pathGroup = shapeLayer.property("Contents").addproperty("ADBE Vector Shape - Ellipse");
    var stroke = shapeLayer.property("Contents").addproperty("ADBE Vector Graphic - Stroke");
    var fill = shapeLayer.property("Contents").addproperty("ADBE Vector Graphic - Fill");
    stroke.property("Color").setValue([1, 1, 1]); // Set stroke color to white
    stroke.property("Stroke Width").setValue(10); // Set stroke width

    // Add trim paths to the ellipse
    var trimPaths = shapeLayer.property("Contents").addProperty("ADBE Vector Filter - Trim");
    trimPaths.property("Start").setValue(0);
    trimPaths.property("End").setValue(100);

    // Set line cap to round
    stroke.property("Line Cap").setValue(2); // 2 represents 'Round Cap'

    // Clear fill
    shapeLayer.property("Contents").property("Fill 1").remove();

    // Refresh the view
    comp.openInViewer();

    return true;
}




