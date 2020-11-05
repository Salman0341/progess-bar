/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";

/**
 * Wordpress Components
 */

import { TextareaControl, PanelBody } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */

function Edit(props) {
	return (
		<Fragment>
			<p className={props.className}>{props.attributes.content}</p>

			<InspectorControls>
				<PanelBody title="General">
					<TextareaControl
						label="Content"
						value={props.attributes.content}
						onChange={(newContent) =>
							props.setAttributes({ content: newContent })
						}
					/>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);
}

export default Edit;
