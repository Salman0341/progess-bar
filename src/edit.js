/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import Inspector from './Inspector';

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
	const { className } = props;

	return (
		<Fragment>
			<div className="cwp_content_wrap" style={ { textAlign: headingAlignment, backgroundColor: wrapperBgColor} }> 
			{headingToggleOption && (
				<h1
					style={{
						color: headingColor,
						fontSize: headingFontSize,
						padding: headingPadding
					}}
				>
					{heading}
				</h1>
			)}

			{contentToggleOption && (
				<p
					style={{ color: ContentColor, fontSize: contentFontSize, padding: contentPadding }}
					className={className}
				>
					{content}
				</p>
			)}
			</div>
			<Inspector {...props} />
		</Fragment>
	);
}

export default Edit;
