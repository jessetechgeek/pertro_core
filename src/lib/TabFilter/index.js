import React from 'react';
import { Space } from 'antd';
import classnames from 'classnames';
import { func } from 'prop-types';
import './style.scss';

const DEFAULT_DATA = [
	'All',
	'Stocking',
	'OutOfStock',
	'Deactive',
	'Rejected',
];


const TabsFilter = ({
	onClickActive = () => null,
	tabData = DEFAULT_DATA,
	additionInfo = {},
	status = '' }) => {

	return (
		<div className="tags">
			<div className="border" />
			<Space size={30}>
				{tabData.map((prodStatus) => (
					<div
						key={prodStatus}
						className={classnames('tag-item', {
							active: prodStatus.toLowerCase() === status.toLowerCase(),
						})}
						onClick={() => onClickActive(prodStatus)}
					>
						{prodStatus}{' '}
						{`(${additionInfo[prodStatus] || 0})`}
					</div>
				))}
			</Space>
		</div>
	);
};

TabsFilter.propTypes = {
	onClickActive: func,
};

export default React.memo(TabsFilter);