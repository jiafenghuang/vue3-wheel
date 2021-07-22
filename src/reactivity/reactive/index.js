import { isObject } from '../shared/utils';
import { mutableHandle } from './mutableHandle';
function useReactive(target) {
	return createReactiveObject(target, mutableHandle);
}
function createReactiveObject(target, baseHandler) {
	if (!isObject(target)) {
		return target;
	}

	const observer = new Proxy(target, baseHandler);
	return observer;
}

function useDOM() {}
export { useReactive, useDOM };
