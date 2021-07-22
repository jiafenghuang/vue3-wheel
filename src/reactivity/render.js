import { eventFormat, bindEvent, stateFormat } from './';
export function useDOM({ template, state, methods }, DOM) {
	DOM.innerHTML = render(template, state);
	bindEvent(methods);
}
export function render(template, state) {
	template = eventFormat(template);
	template = stateFormat(template, state);
	return template;
}
export function update(statePool, key, value) {
	const allElements = document.getElementsByTagName('*');
	let oItem;
	statePool.map(item => {
		if (item.state[item.state.length - 1] === key) {
			for (let i = 0; i < allElements.length; i++) {
				oItem = allElements[i];
				if (parseInt(oItem.dataset.dom) === item.flag) {
					oItem.innerHTML = value;
				}
			}
		}
	});
}
