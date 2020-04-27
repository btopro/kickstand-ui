import { text, select, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Containers/Carousel' };

export const carouselOptions = () => {
    const timer = number('timer', 6000);
    const autoplay = boolean('autoplay', false);
    const thumbnails = boolean('thumbnails', false);
    const hideIndicators = boolean('hide-indicators', false);
    const hideControls = boolean('hide-controls', false);
    const cssClass = text('class', 'm-md w-50');

    return (`
        <c-carousel autoplay="${autoplay}" thumbnails="${thumbnails}" hide-indicators="${hideIndicators}" hide-controls="${hideControls}" timer="${timer}" class="${cssClass}">
            <c-carousel-slide alt="Jim Pranks Dwight" src="http://oyster.ignimgs.com/wordpress/stg.ign.com/2013/05/Stapler_in_jello.jpg">
                <h2>Stapler in Jello</h2>
            </c-carousel-slide>
            <c-carousel-slide alt="Jim Pranks Dwight" src="https://www.bing.com/th?id=OIP.vcsEsRm8QqPj0OW_edJICwHaEJ&pid=Api&rs=1">
                <h2>Jim Dressed as Dwight</h2>
                <c-button>Find Out More</c-button>
            </c-carousel-slide>
            <c-carousel-slide alt="Jim Pranks Dwight" src="https://www.8asians.com/wp-content/uploads/2012/10/8A-Asian-Jim-Jim-Vs-Dwight-Randall-Park.png">
                <h2>Asian Jim</h2>
                <p>(Not really Jim)</p>
            </c-carousel-slide>
            <c-carousel-slide alt="Jim Pranks Dwight" src="https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F29%2Fbed54d5a-3d87-4f44-8f30-70ea3d7ed505.png?w=740&h=416&fit=crop&crop=faces&auto=format&q=70">
                <h3>Dwight Fights Himself</h3>
            </c-carousel-slide>
        </c-carousel>
    `);
};

export const carouselSlideOptions = () => {
    const position = select('position', ['start', 'center', 'end'], 'center');
    const align = select('align', ['start', 'center', 'end'], 'center');
    const url = text('url', '');
    const clickable = boolean('clickable', false);
    const cssClass = text('class', 'm-md w-50');

    return (`
        <c-carousel autoplay="true" class="${cssClass}">
            <c-carousel-slide clickable="${clickable}" url="${url}" position="${position}" align="${align}" alt="Jim Pranks Dwight" src="https://oyster.ignimgs.com/wordpress/stg.ign.com/2013/05/Jims_wall_of_pencils.png">
                <h2>Desk Fort</h2>
            </c-carousel-slide>
            <c-carousel-slide clickable="${clickable}" url="${url}" position="${position}" align="${align}" alt="Jim Pranks Dwight" src="https://img.buzzfeed.com/buzzfeed-static/static/2015-07/17/14/enhanced/webdr08/enhanced-4901-1437158753-3.jpg">
                <h3>Pavlov's Dwight</h3>
                <c-button>Test Button</c-button>
            </c-carousel-slide>
        </c-carousel>
    `);
};
