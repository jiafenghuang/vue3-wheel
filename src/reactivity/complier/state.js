import { randomNum } from '../shared/utils';

const reg_var = /\{\{(.*?)\}\}/g;
const reg_data_dom = /\<.+?\>\{\{(.+?)\}\}\<\/.+?\>/g;
const reg_tag = /\<(.+?)\>/;
const reg_frontTag = node => {
	return new RegExp(`\<(.+?)\>${node}\</(.+?)\>`);
};
let o = 0;
export const statePool = [];

export function stateFormat(template, state) {
	let _state = {};
	template = template.replace(reg_data_dom, (node, key) => {
		const matched = node.match(reg_tag);
		const _flag = randomNum();

		_state.flag = _flag;
		statePool.push(_state);
		_state = {};
		return `<${matched[1]} data-dom="${_flag}">{{${key}}}</${matched[1]}>`;
	});
	// console.log(`template`, template);
	return template.replace(reg_var, (node, key) => {
		let _var = key.trim();
		const _varArr = _var.split('.'); //可能会有 state.count
		let i = 0;

		while (i < _varArr.length) {
			_var = state[_varArr[i]];
			i++;
		}
		_state.state = _varArr;
		statePool[o].state = _varArr;
		o++;
		// statePool.push(_state);
		// console.log(`statePool`, statePool);
		return _var;
	});
	return template;
}
