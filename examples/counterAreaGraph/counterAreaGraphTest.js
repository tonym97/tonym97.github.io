/// <reference path='../../dist/index.d.ts' />
/// <reference path='../testBase.ts' />
/// <reference path='../testData.ts' />
var AreaTest;
(function (AreaTest) {
    var leftAxis = {
        scaleType: UWT.AxisType.Linear,
        label: 'Values1',
        scalingInfo: TestData.defaultScalingInfo
    };
    var percentAxis = {
        scaleType: UWT.AxisType.Linear,
        label: '',
        scalingInfo: {
            baseScale: { scalar: 1, units: '%', maxRange: Number.MAX_VALUE }
        },
        range: { min: 0, max: 100 }
    };
    window.onload = function () {
        TestBase.configureButtons();
        createView();
        TestBase.render();
    };
    function createView() {
        {
            var lane1 = {
                title: 'D',
                type: UWT.UIType.Cartesian,
                dataSets: [{
                        renderType: UWT.RenderType.Area,
                        data: new Array(0),
                        decimator: new UWT.SummedValueXYSeriesDecimator()
                    }],
                legends: [{ alignment: UWT.Alignment.Right }],
                axes: [
                    {
                        axisDesc: leftAxis,
                        alignment: UWT.Alignment.Left,
                        enableDynamicRange: true
                    }
                ],
                isXContinuous: true
            };
            lane1.dataSets[0].data.push({ name: 'data-0', values: TestData.xyDataSets[0] });
            UWT.Chart.finalize(lane1);
            TestBase.addElement(lane1);
        }
    }
    AreaTest.createView = createView;
})(AreaTest || (AreaTest = {}));
//# sourceMappingURL=counterAreaGraphTest.js.map