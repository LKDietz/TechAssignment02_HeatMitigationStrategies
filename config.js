var config = {
    style: 'mapbox://styles/laurakd/cmtpu0nco00eu01pm4wvwfk1r',
    accessToken: 'pk.eyJ1IjoibGF1cmFrZCIsImEiOiJjbXRqZm9qemkwNDN3MndwdzAyZ3Z2dDN1In0.f0bzszgvxBTNfGe51c55jQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false,
    auto: false,
    title: 'Heat Stress and Urban Mitigation in Singapore',
    subtitle: 'A macro to micro analysis of Singapore\'s urban heat mitigation strategies',
    byline: 'By Laura Dietzold',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Man-Made Shelter: Covered Walkways',
            description: 'Unprecedented heat and longer heatwaves across Europe are making large cities increasingly unlivable and unsafe for residents over the summer months. As a result, studying countries like Singapore (that face extreme heat on a daily basis) can be a crucial case study in evaluating urban heat stress mitigation strategies. The narrative of this map transitions from a macro-scale infrastructure analysis to intimate human experience, it begins by mapping extensive covered walkway networks alonsgide dense regional canopies and national park tracks, showing how natural and man-made shading strategies intertwine. This framework is directly overlaid with a georeferenced satellite land surface temperature (LST) model, providing empirical proof of how structural shade directly depresses ground-level heat islands. Finally, the story centers on the micro scale, projecting a qualitative field-observation walking track complete with localized photographic logs. Together, these layers demonstrate how strategic shade interventions transform hostile thermal environments into climate-resilient pedestrian corridors. .<br><br><strong>Key:</strong><br>• Yellow = Covered Walkways</strong><br>• Red = Weather Stations', 
            location: {
                center: [103.853, 1.359],
                zoom: 11.04,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'coveredlinks',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'heritagetrees',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'nparkstracks',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'laurakd-bxnsy2',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'trackingshadingdevices-qualitativemap',
                    opacity: 0,
                    duration: 1000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            title: 'Natural Canopy and Heritage Trees',
            description: 'Combining man-made shelter with NParks heritage trees and natural green coverage tracks reveals how urban forestry works alongside built infrastructure to cool the city.<br><br><strong>Key:</strong><br>• Light green dots = Heritage Trees<br>• Green dots = NParks tracks',
            location: {
                center: [103.853, 1.359],
                zoom: 11.04,
                pitch: 0,
                bearing: 0,
                speed: 2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'coveredlinks',
                    opacity: 0.5,
                    duration: 1000
                },
                {
                    layer: 'heritagetrees',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'nparkstracks',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'laurakd-bxnsy2',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'trackingshadingdevices-qualitativemap',
                    opacity: 0,
                    duration: 1000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: 'Singapore Ground Temperature',
            description: 'A georeferenced thermal surface map highlights macro-scale temperature distribution, pointing out areas experiencing severe heat stress and evaluating where existing coverage provides relief.<br><br><strong>Key:</strong><br>• Red = High temperatures (31°C+)<br>• Blue = Cooler temperatures (25–31°C)',
            location: {
                center: [103.853, 1.359],
                zoom: 11.04,
                pitch: 0,
                bearing: 0,
                speed: 2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'coveredlinks',
                    opacity: 0.3,
                    duration: 1000
                },
                {
                    layer: 'heritagetrees',
                    opacity: 0.3,
                    duration: 1000
                },
                {
                    layer: 'nparkstracks',
                    opacity: 0.3,
                    duration: 1000
                },
                {
                    layer: 'laurakd-bxnsy2',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'trackingshadingdevices-qualitativemap',
                    opacity: 0,
                    duration: 1000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-4',
            alignment: 'right',
            hidden: false,
            title: 'Multi-Layer Micro Analysis',
            description: 'Zooming into a focused district reveals how all layers—canopy cover, walkways, and thermal data—overlap to mitigate microclimatic heat stress on the ground.<br><br><strong>Key:</strong><br>• All layers active for combined analysis',
            location: {
                center: [103.806, 1.324],
                zoom: 13.21,
                pitch: 30,
                bearing: 0,
                speed: 2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'coveredlinks',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'heritagetrees',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'nparkstracks',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'laurakd-bxnsy2',
                    opacity: 0.7,
                    duration: 1000
                },
                {
                    layer: 'trackingshadingdevices-qualitativemap',
                    opacity: 0,
                    duration: 1000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-5',
            alignment: 'left',
            hidden: false,
            title: 'Qualitative Walk: Ground Observations',
            description: 'A micro-scale look at a recorded Strava walking route converted via QGIS, capturing firsthand photographic documentation of observed shades, materials, and pedestrian strategies.<br><br><strong>Key:</strong><br>• Purple dots = Route exploring shading devices in Singapore</strong><br>• black dots = Click to reveal photos of observed shading devices and personal observations.',
            location: {
                center: [103.782, 1.309],
                zoom: 12.96,
                pitch: 45,
                bearing: 20,
                speed: 1.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'coveredlinks',
                    opacity: 0.2,
                    duration: 1000
                },
                {
                    layer: 'heritagetrees',
                    opacity: 0.2,
                    duration: 1000
                },
                {
                    layer: 'nparkstracks',
                    opacity: 0.2,
                    duration: 1000
                },
                {
                    layer: 'laurakd-bxnsy2',
                    opacity: 0.2,
                    duration: 1000
                },
                {
                    layer: 'trackingshadingdevices-qualitativemap',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'shading-photo-pins',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: []
        }
    ]
};
