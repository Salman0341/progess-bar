import { InspectorControls } from "@wordpress/block-editor";

/**
 * Wordpress Components
 */

import {
	TextareaControl,
	TextControl,
	RangeControl,
    ColorPalette,
    PanelRow,
	__experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup,
    FormToggle,
	PanelBody
} from '@wordpress/components';


function Inspector(props) {

    const {
		headingColor,
		ContentColor,
		headingFontSize,
		contentFontSize,
		headingPadding,
		contentPadding,
		content,
		heading,
        headingAlignment,
        headingToggleOption,
		contentToggleOption,
		wrapperBgColor
    } = props.attributes;
    
    
	const colors = [
		{ name: 'red', color: '#f00' },
		{ name: 'white', color: '#fff' },
		{ name: 'blue', color: '#00f' }
    ];
    
    return (
        <InspectorControls>
            <PanelBody title="General">
                    <PanelRow> 
                    <span>Heading </span>
					<br />
                     <FormToggle 
                      checked={ headingToggleOption }
                      onChange={ newtoggleOPtion => props.setAttributes({headingToggleOption: !headingToggleOption})} 
                    />
                    </PanelRow>
                    <PanelRow>
                    <span>Content</span>
					<br />
                    <FormToggle 
                      label="Content"
                      checked={ contentToggleOption }
                      onChange={ newtoggleOPtion => props.setAttributes({contentToggleOption: !contentToggleOption})} 
                    />
                    </PanelRow>
					<TextControl
						label="heading"
						value={heading}
						onChange={(newHeading) => props.setAttributes({ heading: newHeading })}
					/>
					<TextareaControl
						label="Content"
						value={content}
						onChange={(newContent) => props.setAttributes({ content: newContent })}
					/>
				</PanelBody>

				<PanelBody title="Settings">
					<RangeControl
						label="Heading Font Size"
						value={headingFontSize}
						onChange={(newFontSize) => props.setAttributes({ headingFontSize: newFontSize })}
						min={10}
						max={100}
					/>

					<RangeControl
						label="Content Font Size"
						value={contentFontSize}
						onChange={(newFontSize) => props.setAttributes({ contentFontSize: newFontSize })}
						min={10}
						max={100}
					/>

					<RangeControl
						label="Heading Padding"
						value={headingPadding}
						onChange={(newPadding) => props.setAttributes({ headingPadding: newPadding })}
						min={1}
						max={100}
					/>

					<RangeControl
						label="Content Padding"
						value={contentPadding}
						onChange={(newPadding) => props.setAttributes({ contentPadding: newPadding })}
						min={1}
						max={100}
					/>

					<ColorPalette
						label="Heading Color"
						colors={colors}
						value={headingColor}
						onChange={(newColor) => props.setAttributes({ headingColor: newColor })}
					/>

					<ColorPalette
						label="Content Color"
						colors={colors}
						value={ContentColor}
						onChange={(newColor) => props.setAttributes({ ContentColor: newColor })}
					/>
					<span>Heading Alignment</span>
					<br />
					<RadioGroup
						label="Alignment"
						checked={headingAlignment}
						onChange={(newHeadingAlignment) =>
							props.setAttributes({ headingAlignment: newHeadingAlignment })}
					>   
						<Radio value="left">Left</Radio>
						<Radio value="center">Center</Radio>
						<Radio value="right">Right</Radio>
					</RadioGroup>

					<ColorPalette
						label="bg Color"
						colors={colors}
						value={wrapperBgColor}
						onChange={(newColor) => props.setAttributes({ wrapperBgColor: newColor })}
					/>
				</PanelBody>
        </InspectorControls>
    )
}

export default Inspector;