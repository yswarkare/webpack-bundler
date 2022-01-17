import React from 'react';

const RadioButton = ({
	label = '',
	value = '',
	className = '',
	containerClasses = '',
	labelClasses = '',
	...restProps
}) => {
	return (
		<label className={`cursor-pointer flex flex-row gap-2 items-center ${containerClasses}`}>
			<input
				type={`radio`}
				value={value}
				className={`cursor-pointer ${className}`}
				{...restProps}
			/>
			<span className={`${labelClasses || 'min-w-max text-field text-black'}`}>
				{label || value}
			</span>
		</label>
	);
};

export default RadioButton;
