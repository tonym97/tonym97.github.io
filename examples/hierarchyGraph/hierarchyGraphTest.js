/// <reference path='../../dist/index.d.ts' />
var HierarchyGraphTest;
(function (HierarchyGraphTest) {
    window.onload = function () {
        TestBase.colorManager.setColor('pcie', 'red');
        TestBase.colorManager.setColor('socket-interconnect', 'purple');
        TestBase.colorManager.setColor('memchannel', 'green');
        TestBase.colorManager.setColor('Node0', 'rgb(192, 192, 192)');
        TestBase.colorManager.setColor('Node1', 'rgb(192, 0, 192)');
        TestBase.colorManager.setColor('Node2', 'rgb(0, 192, 192)');
        TestBase.colorManager.setColor('Node3', 'rgb(192,192, 0)');
        var graph = {
            links: links,
            nodes: root,
            type: UWT.UIType.HierarchyGraph,
            onClick: function (event) {
                console.log('hierarchy click');
                console.log(event.data);
                var isNode = event.data.key != undefined;
                if (isNode && event.data !== root) {
                    graph.nodes = event.data;
                    graph.renderer.render(graph);
                }
            },
            onDoubleClick: function (event) {
                console.log('hierarchy double click');
                console.log(event.data);
            },
            contextMenuItems: [{
                    title: 'GraphMenuItem',
                    action: function (elem, data, index) {
                        console.log('index: ' + index);
                        console.log(data);
                        console.log(elem);
                    }
                }],
            onTooltip: function (event) {
                var tooltip = event.data.tooltip;
                var data = event.data.data;
                tooltip.clearTooltip();
                if (data.key) {
                    tooltip.getTooltipDiv().append(data.key);
                }
                if (data.from) {
                    tooltip.getTooltipDiv().append(data.from + ' ↔ ' + data.to + '\n');
                }
            }
        };
        var graph2 = {
            links: links,
            nodes: root,
            type: UWT.UIType.HierarchyGraph,
            onClick: function (event) {
                console.log('hierarchy click');
                console.log(event.data && event.data.key);
                var isNode = event.data.key != undefined;
                if (isNode && event.data !== root2) {
                    graph2.nodes = event.data;
                    graph2.renderer.render(graph2);
                }
            },
            decimator: {
                isVisible: function (node) {
                    var depth = 0;
                    var parent = node;
                    while (parent) {
                        parent = parent.parent;
                        ++depth;
                    }
                    return depth < 3;
                }
            },
            onTooltip: function (event) {
                var tooltip = event.data.tooltip;
                var data = event.data.data;
                //using the MetricListTooltip setData call
                tooltip.setData('My Title', [{
                        source: undefined, group: 'foo',
                        metrics: {
                            key1: 'data1',
                            key2: 'data2'
                        }
                    }]);
            }
        };
        var graph3 = {
            links: links,
            nodes: root,
            type: UWT.UIType.HierarchyGraph,
            onClick: function (event) {
                console.log('hierarchy click');
                console.log(event.data);
                var isNode = event.data.key != undefined;
                if (isNode && event.data !== root) {
                    graph3.nodes = event.data;
                    graph3.renderer.render(graph3);
                }
            },
            decimator: {
                isVisible: function (node) {
                    var depth = 0;
                    var parent = node;
                    while (parent) {
                        parent = parent.parent;
                        ++depth;
                    }
                    return depth < 4;
                }
            }
        };
        var root2 = {
            key: 'root',
            hideBorder: true,
            top: [{
                    key: 'Node0',
                    center: [
                        {
                            key: 'Socket 0',
                            label: 'Socket 0',
                            image: 'http://lanpartypathfinder.com/images/a00302_technology03_core2xe_quad_400x400.jpg',
                            type: ['socket']
                        }
                    ],
                    left: [
                        {
                            key: 'Device-Parent1',
                            left: [
                                {
                                    key: '172',
                                    label: 'enp51s0',
                                    image: 'http://bshankar-desk1.sc.intel.com:6543/apps/ppe/img/ethernet.png',
                                    type: ['device']
                                },
                                {
                                    key: '170',
                                    label: 'sda',
                                    image: 'http://bshankar-desk1.sc.intel.com:6543/apps/ppe/img/disk.png',
                                    type: ['device']
                                },
                                {
                                    key: '168',
                                    label: 'sr0',
                                    image: 'http://bshankar-desk1.sc.intel.com:6543/apps/ppe/img/disk.png',
                                    type: ['device']
                                }
                            ]
                        }
                    ]
                },
                {
                    key: 'Node1',
                    center: [
                        {
                            key: 'Socket 1',
                            label: 'Socket 1',
                            image: 'http://lanpartypathfinder.com/images/a00302_technology03_core2xe_quad_400x400.jpg',
                            type: ['socket']
                        }
                    ],
                }],
            bottom: [
                {
                    key: 'Node2',
                    center: [
                        {
                            key: 'Socket 2',
                            label: 'Socket 2',
                            image: 'http://lanpartypathfinder.com/images/a00302_technology03_core2xe_quad_400x400.jpg',
                            type: ['socket']
                        }
                    ],
                },
                {
                    key: 'Node3',
                    center: [
                        {
                            key: 'Socket 3',
                            label: 'Socket 3',
                            image: 'http://lanpartypathfinder.com/images/a00302_technology03_core2xe_quad_400x400.jpg',
                            type: ['socket'],
                        }
                    ],
                }
            ]
        };
        var graph4 = {
            links: links,
            nodes: root2,
            type: UWT.UIType.HierarchyGraph,
            onClick: function (event) {
                console.log('hierarchy click');
                console.log(event.data);
                var isNode = event.data.key != undefined;
                if (isNode && event.data !== root2) {
                    graph4.nodes = event.data;
                    graph4.renderer.render(graph4);
                }
            }
        };
        var root3 = {
            key: 'root',
            top: [
                {
                    key: 'Node0',
                    center: [
                        {
                            key: 'soc0',
                            top: [
                                {
                                    key: 'DIMM-Parent4',
                                    left: [
                                        {
                                            key: 'Rank-5',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        },
                                        {
                                            key: 'Rank-6',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        }
                                    ]
                                },
                                {
                                    key: 'DIMM-Parent7',
                                    left: [
                                        {
                                            key: 'Rank-8',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        },
                                        {
                                            key: 'Rank-9',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        }
                                    ]
                                },
                                {
                                    key: 'DIMM-Parent10',
                                    left: [
                                        {
                                            key: 'Rank-11',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        },
                                        {
                                            key: 'Rank-12',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        }
                                    ]
                                }, {
                                    key: 'DIMM-Parent14',
                                    left: [
                                        {
                                            key: 'Rank-15',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        },
                                        {
                                            key: 'Rank-16',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        },
                                    ]
                                },
                                {
                                    key: 'DIMM-Parent17',
                                    left: [
                                        {
                                            key: 'Rank-18',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        },
                                        {
                                            key: 'Rank-19',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        },
                                    ]
                                },
                                {
                                    key: 'DIMM-Parent20',
                                    left: [
                                        {
                                            key: 'Rank-21',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        },
                                        {
                                            key: 'Rank-22',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        },
                                    ]
                                }
                            ],
                            center: [
                                {
                                    top: [
                                        {
                                            key: '3',
                                            label: 'Memory Controller 0'
                                        },
                                        {
                                            key: '13',
                                            label: 'Memory Controller 1'
                                        }
                                    ],
                                    key: 'Socket 0',
                                    label: 'Socket 0',
                                    image: 'http://lanpartypathfinder.com/images/a00302_technology03_core2xe_quad_400x400.jpg',
                                    type: ['socket']
                                }
                            ]
                        }
                    ],
                    left: [
                        {
                            key: 'Device-Parent1',
                            left: [
                                {
                                    key: '172',
                                    label: 'enp51s0',
                                    image: 'http://bshankar-desk1.sc.intel.com:6543/apps/ppe/img/ethernet.png',
                                    type: ['device']
                                },
                                {
                                    key: '170',
                                    label: 'sda',
                                    image: 'http://bshankar-desk1.sc.intel.com:6543/apps/ppe/img/disk.png',
                                    type: ['device']
                                },
                                {
                                    key: '168',
                                    label: 'sr0',
                                    image: 'http://bshankar-desk1.sc.intel.com:6543/apps/ppe/img/disk.png',
                                    type: ['device']
                                }
                            ]
                        }
                    ]
                },
                {
                    key: 'Node1',
                    right: [
                        {
                            key: 'Device-Parent2',
                            left: [
                                {
                                    key: '999',
                                    label: 'enp51s0',
                                    image: 'http://bshankar-desk1.sc.intel.com:6543/apps/ppe/img/ethernet.png',
                                    type: ['device']
                                }
                            ]
                        }
                    ],
                    center: [
                        {
                            key: 'soc1',
                            top: [
                                {
                                    key: 'DIMM-Parent176',
                                    left: [
                                        {
                                            key: 'Rank-177',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        },
                                        {
                                            key: 'Rank-178',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        }
                                    ]
                                },
                                {
                                    key: 'DIMM-Parent179',
                                    left: [
                                        {
                                            key: 'Rank-180',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        },
                                        {
                                            key: 'Rank-181',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        }
                                    ]
                                },
                                {
                                    key: 'DIMM-Parent182',
                                    left: [
                                        {
                                            key: 'Rank-183',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        },
                                        {
                                            key: 'Rank-184',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        }
                                    ]
                                },
                                {
                                    key: 'DIMM-Parent186',
                                    left: [
                                        {
                                            key: 'Rank-187',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        },
                                        {
                                            key: 'Rank-188',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        }
                                    ]
                                },
                                {
                                    key: 'DIMM-Parent189',
                                    left: [
                                        {
                                            key: 'Rank-190',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        },
                                        {
                                            key: 'Rank-191',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        }
                                    ]
                                },
                                {
                                    key: 'DIMM-Parent192',
                                    left: [
                                        {
                                            key: 'Rank-193',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        },
                                        {
                                            key: 'Rank-194',
                                            image: 'https://42xtjqm0qj0382ac91ye9exr-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ddr4-rdimm-and-lrdimm-chipset.jpg',
                                            type: ['dimm']
                                        }
                                    ]
                                }
                            ],
                            center: [{
                                    top: [
                                        {
                                            key: '175',
                                            label: 'Memory Controller 0'
                                        },
                                        {
                                            key: '185',
                                            label: 'Memory Controller 1'
                                        }
                                    ],
                                    key: 'Socket 1',
                                    label: 'Socket 1',
                                    image: 'http://lanpartypathfinder.com/images/a00302_technology03_core2xe_quad_400x400.jpg',
                                    type: ['socket']
                                }],
                        }
                    ]
                }
            ],
            bottom: [
                {
                    key: 'Node2',
                    center: [
                        {
                            key: 'Socket 2',
                            label: 'Socket 2',
                            image: 'http://lanpartypathfinder.com/images/a00302_technology03_core2xe_quad_400x400.jpg',
                            type: ['socket']
                        }
                    ],
                },
                {
                    key: 'Node3',
                    center: [
                        {
                            key: 'Socket 3',
                            label: 'Socket 3',
                            image: 'http://lanpartypathfinder.com/images/a00302_technology03_core2xe_quad_400x400.jpg',
                            type: ['socket'],
                        }
                    ],
                }
            ]
        };
        var graph5 = {
            links: links,
            nodes: root3,
            type: UWT.UIType.HierarchyGraph,
            onClick: function (event) {
                console.log('hierarchy click');
                console.log(event.data);
                var isNode = event.data.key != undefined;
                if (isNode && event.data !== root3) {
                    graph5.nodes = event.data;
                    graph5.renderer.render(graph5);
                }
            }
        };
        var graph6 = {
            links: [],
            nodes: {
                "key": "Socket 0Core 0",
                "label": "Core 0",
                "type": ["core"],
                "right": [{
                        "key": "Thread0",
                        "label": "HT# 0",
                        "type": ["thread_core"]
                    }, {
                        "key": "Thread36",
                        "label": "HT# 36",
                        "type": ["thread_core"]
                    }]
            },
            type: UWT.UIType.HierarchyGraph
        };
        TestBase.addElement(graph);
        TestBase.addElement(graph2);
        TestBase.addElement(graph3);
        TestBase.addElement(graph4);
        TestBase.addElement(graph5);
        TestBase.addElement(graph6);
        function goToRoot() {
            graph.nodes = root;
            graph2.nodes = root;
            graph3.nodes = root;
            graph4.nodes = root2;
            graph5.nodes = root3;
            graph.render();
            graph2.render();
            graph3.render();
            graph4.render();
            graph5.render();
        }
        document.getElementById('goToRoot').addEventListener('click', goToRoot, false);
        TestBase.configureButtons();
        TestBase.render();
    };
})(HierarchyGraphTest || (HierarchyGraphTest = {}));
//# sourceMappingURL=hierarchyGraphTest.js.map