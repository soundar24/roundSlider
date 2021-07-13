# roundSlider - A free jQuery plugin

[![Financial Contributors on Open Collective](https://opencollective.com/roundSlider/all/badge.svg?label=financial+contributors)](https://opencollective.com/roundSlider) [![npm](https://img.shields.io/npm/v/round-slider)](https://www.npmjs.com/package/round-slider) [![GitHub](https://img.shields.io/github/license/soundar24/roundSlider)](https://github.com/soundar24/roundSlider/blob/master/LICENSE)

### What's this ?

Round slider (also can call as Circular slider, Radial slider) is a jQuery plugin that allows the user to select a value or range of values.

Not only a round slider, it supports the quarter, half and pie circle shapes also.

![roundSlider - full slider, pie slider, half slider and quarter slider types](/images/sliders.png)

You can check the demos of various circle shapes [here](http://roundsliderui.com/demos.html#various-circle-shapes "various circle shapes - demo").

### Different Theming and Appearances ?

By customizing the CSS styles we can make different appearances.

![roundSlider - different theming and appearances](/images/appearances.png)

You can check the detailed demos [here](http://roundsliderui.com/demos.html#different-theming-and-appearances "different theming and appearances").

### Browser Support

IE 9+, Chrome, Firefox, Safari, Opera (including Mobile devices).

### Options

The roundSlider has several properties and events to interact with the control programmatically. 

To know more about the **Options**, please check the [documentation](http://roundsliderui.com/document.html#options "Documentation about roundSlider Options").

```javascript
$("#slider").roundSlider({
	min: 0,
	max: 100,
	step: 1,
	value: null,
	radius: 85,
	width: 16,
	handleSize: "+0",
	startAngle: 0,
	endAngle: "+360",
	animation: true,
	showTooltip: true,
	editableTooltip: true,
	readOnly: false,
	disabled: false,
	keyboardAction: true,
	mouseScrollAction: false,
	sliderType: "default",
	circleShape: "full",
	handleShape: "round",
	lineCap: "butt",

	// the 'startValue' property decides at which point the slider should start.
	// otherwise, by default the slider starts with min value. this is mainly used
	// for min-range slider, where you can customize the min-range start position.
	startValue: null,

	// SVG related properties
	svgMode: false,
	borderWidth: 1,
	borderColor: null,
	pathColor: null,
	rangeColor: null,
	tooltipColor: null,

	// events
	beforeCreate: null,
	create: null,
	start: null,
	// 'beforeValueChange' will be triggered before 'valueChange', and it can be cancellable
	beforeValueChange: null,
	drag: null,
	change: null,
	// 'update' event is the combination of 'drag' and 'change'
	update: null,
	// 'valueChange' event is similar to 'update' event, in addition it will trigger
	// even the value was changed through programmatically also.
	valueChange: null,
	stop: null,
	tooltipFormat: null
});
```

### Some quick links

- [How to use ?](http://roundsliderui.com/document.html#how-to-install "roundSlider - How to use ?")
- [Customizations](http://roundsliderui.com/demos.html#customizations "roundSlider - Customizations")
- [Different Theming](http://roundsliderui.com/demos.html#different-theming-and-appearances "roundSlider - Different theming and appearances")

### Test environment

[![roundSlider - test environment](/images/Browserstack-logo.png)](https://www.browserstack.com/)

### Licence

roundSlider is licensed under the terms of the [MIT license](http://roundsliderui.com/licence.html "roundSlider - MIT licence").

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/soundar24/roundSlider/graphs/contributors"><img src="https://opencollective.com/roundSlider/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/roundSlider/contribute)]

#### Individuals

<a href="https://opencollective.com/roundSlider"><img src="https://opencollective.com/roundSlider/individuals.svg?width=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/roundSlider/contribute)]

<a href="https://opencollective.com/roundSlider/organization/0/website"><img src="https://opencollective.com/roundSlider/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/roundSlider/organization/1/website"><img src="https://opencollective.com/roundSlider/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/roundSlider/organization/2/website"><img src="https://opencollective.com/roundSlider/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/roundSlider/organization/3/website"><img src="https://opencollective.com/roundSlider/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/roundSlider/organization/4/website"><img src="https://opencollective.com/roundSlider/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/roundSlider/organization/5/website"><img src="https://opencollective.com/roundSlider/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/roundSlider/organization/6/website"><img src="https://opencollective.com/roundSlider/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/roundSlider/organization/7/website"><img src="https://opencollective.com/roundSlider/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/roundSlider/organization/8/website"><img src="https://opencollective.com/roundSlider/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/roundSlider/organization/9/website"><img src="https://opencollective.com/roundSlider/organization/9/avatar.svg"></a>
