const reg_check_str = /^['|"].+?['|"]$/;
const reg_str = /['|"]/g;
function isObject(value) {
	return typeof value == 'object' && value !== null;
}
function haseOwnProperty(target, key) {
	return Object.prototype.hasOwnProperty.call(target, key);
}
function isEqual(newValue, oldValue) {
	return newValue === oldValue;
}
function randomNum() {
	return new Date().getTime() + parseInt(Math.random() * 10000);
}
function checkType(str) {
	// 将字符串转为对应类型
	if (reg_check_str.test(str)) {
		return str.replace(reg_str, '');
	}
	switch (str) {
		case 'true':
			return true;
		case 'false':
			return false;

		default:
			break;
	}
	return Number(str);
}
export { isObject, haseOwnProperty, isEqual, randomNum, checkType };
