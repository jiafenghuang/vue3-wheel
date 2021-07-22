import { isObject, haseOwnProperty, isEqual } from '../shared/utils';
import { useReactive } from '.';
import { statePool } from '../complier/state';
import { update } from '../render';

/*

*/
const get = createGetter();
const set = createSetter();
function createGetter() {
	return function get(target, key, receiver) {
		const res = Reflect.get(target, key, receiver);
		if (isObject(res)) {
			// proxy只能代理一层，如{name:'sheldon'},无法代理{props:{age:25}}
			console.log(`res`, res);
			return useReactive(res);
		}
		return res;
	};
}
function createSetter() {
	return function set(target, key, value, receiver) {
		const isKeyExist = haseOwnProperty(target, key);
		const oldValue = target[key];
		// console.log(`isKeyExist`, isKeyExist);
		const res = Reflect.set(target, key, value, receiver);
		if (!isKeyExist) {
			console.log(value);
		} else if (!isEqual(value, oldValue)) {
			// console.log(`oldValue`, oldValue);
			// console.log(`value`, value);
			update(statePool, key, value);
		}
		return res;
	};
}

const mutableHandle = {
	get,
	set,
};
export { mutableHandle };
