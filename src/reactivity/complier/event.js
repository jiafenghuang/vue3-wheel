import { randomNum } from '../shared/utils';
import { checkType } from '../shared/utils';
const reg_onClick = /onClick\=\"(.*?)\"/g;
const reg_fnName = /^(.*?)\(/;
const reg_arg = /\((.*?)\)/;

/**
 * eventPool=[]
 *{
 *  flag:随机数，随机字符串
 *  handler:事件处理函数的字符串
 *  type:click
 *}
 *
 *
 *
 */
const eventPool = [];
export function eventFormat(template) {
	template = template.replace(reg_onClick, function (node, key) {
		const _flag = randomNum();
		eventPool.push({
			flag: _flag,
			handler: key.trim(),
			type: 'click',
		});
		return `data-dom="${_flag}"`;
	});
	return template;
}

export function bindEvent(methods) {
	const allElements = document.getElementsByTagName('*');
	let oItem = null;
	let _flag = 0;
	eventPool.forEach(event => {
		for (let i = 0; i < allElements.length; i++) {
			oItem = allElements[i];
			_flag = parseInt(oItem.dataset.dom);
			if (event.flag === _flag) {
				oItem.addEventListener(
					event.type,
					function () {
						const fnName = event.handler.match(reg_fnName)[1];
						const args = checkType(event.handler.match(reg_arg)[1]);
						// console.log(`args`, args);
						methods[fnName](args);
					},
					false
				);
			}
		}
	});
}
