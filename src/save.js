/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save(props) {

	
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
		contentToggleOption
	} = props.attributes;


	return (
		<Fragment>
			<h1 style={{
					color: headingColor,
					fontSize: headingFontSize,
					padding: headingPadding,
					textAlign: headingAlignment
				}}> {props.attributes.heading} </h1>
			<p className={props.className} style={{ color: ContentColor, fontSize: contentFontSize, padding: contentPadding }}>{props.attributes.content}</p>
		</Fragment>	
	);
}

export default save;
