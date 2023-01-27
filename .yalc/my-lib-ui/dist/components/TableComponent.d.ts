import React from 'react';
declare type record = any;
export declare type RecordType = {
    title: React.ReactElement | string;
    dataIndex?: string;
    key?: string;
    render?: (data: record) => React.ReactElement;
    record?: record;
};
export declare type pagination = {
    pageSize: number;
};
export declare type TableComponentProps = {
    columns: RecordType[];
    dataSource: record[];
    pagination: pagination | false;
    rowkey?: string | number;
    empty?: React.ReactElement;
};
declare const TableComponent: React.FC<TableComponentProps>;
export default TableComponent;
