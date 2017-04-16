A Pen created at CodePen.io. You can find this one at http://codepen.io/msrinteractive/pen/PmwgZJ.

 A bubble-popping game made without using JavaScript. To pull off the popping part, I positioned checkboxes offscreen and used the bubbles as labels. When clicking/tapping these labels (bubbles), each gets display: none; when its corresponding checkbox is checked, incrementing the CSS counter for the score. Basically, the 'for' label attribute and the :checked pseudo class are the key role players here.

Update 8/19: Added 'will-change: transform;' to the bubbles to allow smoother movement in mobile. Missing bubbles due to delay of tap event still occurs though.