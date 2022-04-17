/**
 * Generic utility to compose event handlers so that consumers can supply their
 * own event listeners on table components. The default heuristic here is to
 * iterate through the given functions until `preventDefault` is called on the
 * given event.
 *
 * @returns {Function}
 * @param fn
 */

export const composeEventHandlers = ( fn: Function ) => ( event, ... args ) => {
    for ( let i = 0; i < fn.length; i++ ) {
        if ( event.defaultPrevented ) {
            break;
        }
        if ( typeof fn[i] === "function" ) {
            fn[i]( event, ... args );
        }
    }
};
