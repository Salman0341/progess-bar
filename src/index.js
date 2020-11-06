/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import edit from "./edit";
import save from "./save";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("create-block/progress-bar", {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __("Prog Bar", "progress-bar"),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		"THis is a progress bar module. Each progress bar module in a way of block...."
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: "widgets",

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 13H5v-2h14v2z" /></svg>,

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	attributes: {
		
		heading: {
			type: "string",
			default: "Dummy Headline",
		},

		content: {
			type: "string",
			default: "Hello from the editor!",
		},

		headingColor: {
			type: "string",
			default: "#000",
		},

		ContentColor: {
			type: "string",
			default: "#000",
		},

		headingFontSize: {
			type: "number",
			default: 18
		},

		contentFontSize: {
			type: "number",
			default: 18
		},

		headingPadding: {
			type: "number",
			default: 10
		},

		contentPadding: {
			type: "number",
			default: 10
		},
		headingAlignment: {
			type: "string",
			default: "center"
		},

		headingToggleOption: {
			type: "boolean",
			default: true
		},

		contentToggleOption: {
			type: "boolean",
			default: true
		},

		wrapperBgColor: {
			type: "string",
			default: "#000"
		}
	},

	/**
	 * @see ./edit.js
	 */
	edit,

	/**
	 * @see ./save.js
	 */
	save,
});
