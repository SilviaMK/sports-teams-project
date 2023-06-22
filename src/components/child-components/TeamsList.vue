<template>
    <div class="team-item">
        <div class="list-container">
            <img class="team-placeholder" src="../../assets/team-placeholder.png">
            <div class="leagues-info">
                <div>
                    <span class="leagues">{{ getLeagues }}</span>
                    <div class="stadium-info">
                        <span class="city">{{ item.name }}</span>
                        <span class="divider"></span>
                        <img src="../../assets/svg/stadium.svg">
                        <span class="stadium-name">{{ item.stadium }}</span>
                    </div>
                </div>
            </div>
        </div>
        <button v-if="!isFalloled"  @click="fallow(item)">FOLLOW</button>
        <button v-else class="active" @click="unfollow(item)">FOLLOWING</button>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object
        }
    },
    data() {
        return {
            isFalloled: false
        }
    },
    computed: {
        getLeagues() {
            return this.item.leagues.join(', ')
        },
        followState() {
            return this.isFalloled ? 'FOLLOWING' : 'FOLLOW'
        }
    },
    methods: {
        fallow(item) {
            this.$emit('fallow', item)
            this.isFalloled = true
        },
        unfollow(item) {
            this.$emit('unfollow', item)
            this.isFalloled = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .team-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
           
        &:hover {
            background: #F5F7F9;
        }

        .list-container {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 4px 0 4px 16px;

            .leagues-info {
                display: flex;
                justify-content: space-between;
            }

            .team-placeholder {
                width: 34px;
                height: 34px;
                padding: 6px;
                background-color: #F5F7F9;
                border-radius: 50%;
            }

            .leagues {
                display: flex;
                color: #6F8CAA;
                font-size: 11px;
            }

            .stadium-info {
                display: flex;
                align-items: center;
                gap: 6px;

                .divider {
                    border-left: 1px solid #E1E7ED;
                    height: 10px;
                }

                .stadium-name {
                    color: #6F8CAA;
                    font-size: 12px;
                }
            }
        }

        button {
            padding: 8px 20px;
            background-color: #00B1FF;
            border: none;
            border-radius: 28px;
            height: 32px;
            color: #FFF;
            margin-right: 15px;
        }

        .active {
            background-color: #FFF;
            border: 1px solid #00B1FF;
            color:#00B1FF
        }
    }

    @media screen and (max-width: 600px) {
        .city {
            font-size: 12px;
        }
    }
  
</style>