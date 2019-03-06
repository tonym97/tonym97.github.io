
ui-widget-toolkit
===============

The ui-widget-toolkit is a library designed with goal of helping tool developers quickly create useful tools.  The library provides views commonly required for tools like various trace views, line charts, area charts, scatter plots, grid views, flame chart views and connected graph views.

The library helps users focus on pushing data and managing what happens when the user interacts with the views instead of worrying about how to render the data.

The library supports several of the most popular javascript frameworks like AngularJS, Angular, Polymer, Polymer 2, React and Vue.js.  It also uses web workers to try to ensure reasonable UI responsiveness.  It is designed to be extended so users can write different view plugins to extend existing functionality.

Here are the various widgets currently supported by the library:

  * [Area Graph](./examples/area/areaTest.html)
  * [Arrows](./examples/arrow/arrowTest.html)
  * [Bar Chart](./examples/bar/barTest.html)
  * [Box Plot](./examples/boxPlot/boxPlotTest.html)
  * [Sankey Flow Diagrams/Force Graph](./examples/connectedGraph/connectedGraphTest.html)
  * [Flame/Sunburst and Trace Data](./examples/flameSunburst/flameSunburstTest.html)
  * [Grid](./examples/grid/gridTest.html)
  * [Heatmap](./examples/heatMap/heatMapTest.html)
  * [Hierarchy Graph](./examples/hierarchyGraph/hierarchyGraphTest.html)
  * [Line Graph](./examples/line/lineTest.html)
  * [X Axis Marker](./examples/marker/markerTest.html)
  * [Min Max Value](./examples/minMaxValue/minMaxValueTest.html)
  * [Pie Chart](./examples/pie/pieTest.html)
  * [Port Diagram](./examples/portDiagram/portDiagramTest.html)
  * [Rectangle](./examples/rect/rectTest.html)
  * [Scatter Plot](./examples/scatter/scatterTest.html)
  * [Treemap](./examples/treemap/treemap.html)

# Decimators
Decimation schemes allow us to take a data set and dynamically adjust how we render the data.  This allows the renderer to reduce the amount of data to render or to render the same data in different ways.  Atypical decimatiomn scheme is to average the values within a given pixel to render it.  The ui-widget-toolkit can take the same data set and render them differently depending on the usage model:

* Summing the values per X pixel which is useful for rendering [counter data to area graph](./examples/counterAreaGraph/counterAreaGraphTest.html)
* Rendering the range (min/max) value per X pixel as in the first [step graph](./examples/line/lineTest.html) example.

In both cases the data is the same, but the rendered output is useful for different use cases.

Another simple example is given a set of XY data a decimator may render the minimum value, the maximum value or the average value for a given x-axis value.

  * [Scatter Plot](./examples/scatter/scatterTest.html)

Trace data provides a lot of opportunities to leverage decaimtors.  Instead of rendering trace data as a series of recntages which become hard to distingush as the amount of data increases, the ui-widget-toolkit can render trace data as a stacked area graph by the duration per X pixel.  This allows us to see not only when a trace element happens, but also allows one to see how much of the time is consumed by trace element.

  * [Trace Data Charts](./examples/flameSunburst/flameSunburstTest.html)

The residency and stacked area decimators allows one to take multiple XY data sets that have different X values and distribute the Y values to render stacked area graphs.  Once again, the stacked area graph allows one to visualze the relative Y values across multiple data streams.
  * [Area Graph](./examples/area/areaTest.html)



# Building the library:

Run the following commands (assuming NPM is installed)

	npm install
	npm run build-release

# Running Examples:

To build most examples run:

	node_modules\.bin\tsc -p examples

All of the non-framework tests will be built and you can access them by opening the html files for the respective examples.

## Vue Framework Example:
To compile and view the vue example run:

	node_modules\.bin\webpack --config examples-frameworks\vue\webpack.config.js

and then open the example\vue\vue.html

## React Framework Example:
To compile and view the vue example run:

	node_modules\.bin\webpack --config examples-frameworks\react\webpack.config.js

and then open the example\react\react.html

## Angular2 Framework Example:
To compile and view the angular2 example run:

	node_modules\.bin\webpack --config examples-frameworks\angular2\webpack.config.js

and then open the example\angular2\angular2Test.html

## Polymer Framework Examples:
To compile and view the polymer example you must run:

	polymer serve

and then connect via whatever port polymer serve output gives you in your browser.  For example you would go to:

	localhost:8081/examples-frameworks/polymer2/polymer2Test.html

if the polymer serve command runs on port 8081.

## Running tests

1. Make sure there is a chromedriver in the spec/drivers folder for your OS and the spec/drivers folder is in your path.  You can download chromedriver from here:

	http://chromedriver.chromium.org/downloads

2. Unzip the spec/data.zip into the spec/data directory.
3. Run

	- npm run build-test
	- npm run test
