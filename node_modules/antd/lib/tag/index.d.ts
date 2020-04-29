import * as React from 'react';
import CheckableTag from './CheckableTag';
import { PresetColorType, PresetStatusColorType } from '../_util/colors';
import { LiteralUnion } from '../_util/type';
export { CheckableTagProps } from './CheckableTag';
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    prefixCls?: string;
    className?: string;
    color?: LiteralUnion<PresetColorType | PresetStatusColorType, string>;
    closable?: boolean;
    visible?: boolean;
    onClose?: Function;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
}
interface TagType extends React.FC<TagProps> {
    CheckableTag: typeof CheckableTag;
}
declare const Tag: TagType;
export default Tag;
