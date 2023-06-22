<template>
    <div class="header-container">
        <div class="logo-wrapper">
            <span class="arrow">&#10094;</span>
            <img alt="Oddspedia Logo">
        </div>
        <span class="name">RichyRich</span>
        <div class="notifications">
            <img src="../../assets/svg/bell.svg">
            <div class="badge">2</div>
        </div>
      
    </div>
</template>
<style lang="scss" scoped>
    .header-container {
        height: 80px;
        background-color: #1E3554;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 25px;

        .name {
            display: none;
        }

        .logo-wrapper {
            display: flex;
            align-items: center;

            img {
                content: url('https://cdn.oddspedia.com/images/static/brand-logos/logo-dark.svg') ;
            }
        }

        .arrow {
            padding-right: 15px;
            color: #FFF
        }

        .notifications {
            position: relative;

            .badge {
                position: absolute;
                background-color: #00B1FF;
                font-size: 10px;
                font-style: italic;
                color: #FFF;
                width: 14px;
                height: 14px;
                border-radius: 50%;
                top: 10px;
                left: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
   
    }

    @media screen and (max-width: 600px) {
        .header-container {
            width: 375px;
            height: 55px;
            margin: 0 auto;

            .logo-wrapper {
                img {
                    content: url('../../assets/svg/logo-sm.svg') ;
                }
            }

            .name {
                display: block;
                color: #FFF;
                font-style: italic;
                font-weight: bold;
            }
        }
    }
</style>