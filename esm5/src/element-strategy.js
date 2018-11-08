/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Interface for the events emitted through the NgElementStrategy.
 *
 * \@publicApi
 * @record
 */
export function NgElementStrategyEvent() { }
/** @type {?} */
NgElementStrategyEvent.prototype.name;
/** @type {?} */
NgElementStrategyEvent.prototype.value;
/**
 * Underlying strategy used by the NgElement to create/destroy the component and react to input
 * changes.
 *
 * \@publicApi
 * @record
 */
export function NgElementStrategy() { }
/** @type {?} */
NgElementStrategy.prototype.events;
/** @type {?} */
NgElementStrategy.prototype.connect;
/** @type {?} */
NgElementStrategy.prototype.disconnect;
/** @type {?} */
NgElementStrategy.prototype.getInputValue;
/** @type {?} */
NgElementStrategy.prototype.setInputValue;
/**
 * Factory used to create new strategies for each NgElement instance.
 *
 * \@publicApi
 * @record
 */
export function NgElementStrategyFactory() { }
/**
 * Creates a new instance to be used for an NgElement.
 * @type {?}
 */
NgElementStrategyFactory.prototype.create;
//# sourceMappingURL=element-strategy.js.map