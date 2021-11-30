function paint() {
    var letter = "R"
    var val = box.getvalueof()[0] // this is an array of size 1
    var viewsize = mgraphics.size
    var valrange = box.getattr("size")
    var width = viewsize[0]
    var height = viewsize[1]
    var start

    mgraphics.set_source_rgba(box.getattr("bgcolor"))
    mgraphics.rectangle(0, 0, width, height)
    mgraphics.fill()

    if (val) {
        mgraphics.set_source_rgba(box.getattr("checkedcolor"))
    } else {
        mgraphics.set_source_rgba(box.getattr("uncheckedcolor"))
    }

    mgraphics.set_line_width((2 / 12) * box.getattr("thickness") * 0.01 * width) // top left to bottom right, thin
    mgraphics.set_line_cap("square")

    start = (7 / 24) * width

    mgraphics.set_font_size(24)
    var tm = mgraphics.text_measure(letter)
    var v1 = height, v2 = tm[1];
    if(v1 < v2)
    {
        v1 = tm[1];
        v2 = height;
    }
    mgraphics.move_to((width - tm[0]) / 2, height - ((v1 - v2) / 2))
    mgraphics.show_text(letter);
    //mgraphics.stroke()
}
