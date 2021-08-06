export function withTheme(theme){
    return function(...classNames){
        let result = '';
        for(let className of classNames)
            result+= `${className} ${className}--${theme} `;
        return result;
    }
}

/**
 * makeClass = withTheme('dark')
 * makeClass(
 * {
 *      'btn-' : {
 *          'pause' : state.timer
 *          'play' : !state.timer
 *      }
 * }
 * ,'hello')
 * => 'btn-pause', 'btn-dark', 'hello' , 'hello-dark'
 * 
 * makeClass(string,string,string) -> 
 * 
 * makeClass({['btn-pause','btn-play']:state.timer});
 * When state.timer is true : 
 *     btn-pause btn-pause-dark
 * When state.timer is false : 
 *     btn-play btn-play-dark
 */