<img src="private/doc/logo.png" width=256 align=right>
<h1>OpenJSCAD.org</h1>

<b>Version 0.3.1</b> (ALPHA)

<b>OpenJSCAD.org</b> is a more up-to-date <a href="http://joostn.github.com/OpenJsCad/">OpenJsCAD</a> frontend where you can edit .jscad files either locally or online via JS editor (built-in).
A few functions are available to make the transition from <a href="http://openscad.org/">OpenSCAD</a> to OpenJSCAD easier (<a href="https://github.com/Spiritdude/OpenSCAD.jscad">OpenSCAD.jscad</a> built-in),
as well CLI (command-line interface) for server-side computations with NodeJS.
<br>
<br>
This particular fork uses Meteor to manage dependencies and serve static resources. The core functions are separated into packages.


<h2>Installation</h2>

<b>Immediate Use</b>: No installation, go to <b><a href="http://openjscad.org">OpenJSCAD.org</a></b> (Google Chrome, Firefox)

<b>Local Web Use:</b>
Install Meteor as explained here <a href="https://www.meteor.com/install" title="Install Meteor">www.meteor.com/install</a>
<pre>
% git clone https://github.com/nitrolabs/nitrocad
% cd nitrocad
% meteor
</pre>

and then access the files via local web-site and your web-browser.

<h2>Todo</h2>
<ul>
<li> <del>3d primitive: <b>torus()</b></del> (done)
<li> <del>OpenSCAD .scad support for both Web-GUI and CLI</del> (done)
<li> <del><b>include()</b> for Web-GUI and CLI to include libraries and modules, support of multiple .jscad drag & drop with include()</del> (done) 
<li> save from built-in editor to local
<li> <del>complete 2D primitives and transformations</del> (done)
<li> <del>implementation of <b>linear_extrude()</b> <b>rotate_extrude()</b>, parameter compatible to OpenSCAD</del> (done)
<li> <del>example of platonic solids (in progress, requires include())</del> (done)
<li> <del>simple 2D/3D text</del> (done)
<li> <del>2d operation: hull()</del> (done)
<li> processing/progress bar (0..100%), perhaps even visual progress seen in the model direct
<li> <del>STL importer</del> (done) & AMF importer / exporter
<li> integration into <a href="https://github.com/Spiritdude/RepRapCloud">RepRap Cloud</a> as first stage of the workflow
</ul>

<h2>Documentation</h2>
<ul>
<li><b><a href="https://github.com/Spiritdude/OpenJSCAD.org/wiki/User-Guide">OpenJSCAD User & Programming Guide</a></b>
</ul>

<h2>Screenshots</h2>

Simple JSCAD example (example000.jscad):
<img src="private/doc/sshot-01.png">

More sophisticated JSCAD example, fully object-oriented (OO) programmed with interactive parameters (example031.jscad):
<img src="private/doc/sshot-03-illu.png">

Import of STL models:
<img src="private/doc/sshot-04.png">

Drag & drop a local file:
<img src="private/doc/sshot-05-illu.png">

Drag & drop multiple files (Chrome & Firefox) or a folder (Chrome):
<img src="private/doc/sshot-06-illu.png">

<h2>See Also</h2>
<ul>
<li><a href="http://joostn.github.com/OpenJsCad/">OpenJsCAD</a>, starting point of OpenJSCAD.org
<li><a href="http://garyhodgson.github.com/openscad.net/">OpenSCAD.net</a>, another place of inspiration, where the OpenSCAD translator was adapted from
<li><a href="http://kaosat-dev.github.com/CoffeeSCad/">CoffeeSCad</a>, JavaScript simplified (no more {}), very active development
<li><a href="http://rsmith.home.xs4all.nl/software/py-stl-stl2pov.html">stl2pov</a> tool to convert .stl to .pov, and then render via <a href="http://povray.org">PovRay.org</a>
<li><a href="https://github.com/D1plo1d/p3d">P3D</a> STL/AMF/OBJ viewer
</ul>


That's all for now,

Rene K. Mueller<br>
initial version 2013/03/10, updated 2013/04/04
