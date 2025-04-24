import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import { Type, Key, Ref, Props, ReactElementType } from 'shared/ReactTypes';
// ReactElement

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props,
): ReactElementType {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'Lucas',
	};
	return element;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const jsx = (type: Type, config: any, ...maybeChildren: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;
	for (const prop in config) {
		const value = config[prop];
		if (prop === 'key' && value) {
			key = '' + value;
		} else if (prop === 'ref' && value) {
			ref = value;
		}
		if (Object.prototype.hasOwnProperty.call(config, prop)) {
			props[prop] = value;
		}
	}
	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength) {
		if (maybeChildrenLength === 1) {
			props.children = maybeChildren[0];
		} else {
			props.children = maybeChildren;
		}
	}
	return ReactElement(type, key, ref, props);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const jsxDEV = (type: Type, config: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;
	for (const prop in config) {
		const value = config[prop];
		if (prop === 'key' && value) {
			key = '' + value;
		} else if (prop === 'ref' && value) {
			ref = value;
		}
		if (Object.prototype.hasOwnProperty.call(config, prop)) {
			props[prop] = value;
		}
	}

	return ReactElement(type, key, ref, props);
};
