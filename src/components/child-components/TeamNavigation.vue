<template>
    <div class="main-container">
        <div class="info-header">
            <div class="player">
                <img src="../../assets/avatar-m.png" alt="Player">
                <span class="level">Level 5</span>
            </div>
            <span class="player-name">RichyRich</span>
        </div>
        <div class="nav-bar">
            <a @click.prevent.stop class="active" href="">MY TEAMS</a>
            <a @click.prevent.stop href="">ABOUT</a>
        </div>
        <div class="search-container">
            <div class="search-text">SEARCH TEAMS</div>
            <div class="search-input">
                <img class="search-icon" src="../../assets/svg/search-icon.svg">
                <input 
                v-model="search" 
                placeholder="Search for a team" 
                type="text"
                >
                <img @click="deleteSearch" class="close-img" src="../../assets/svg/close.svg">
            </div>
            <div v-if="filteredList.length">
                <div v-for="item in filteredList" :key="item.id">
                    <TeamsList @fallow="fallow" @unfollow="deleteItem" :item="item" ></TeamsList>
                </div>
            </div>
            <div v-else class="no-results">
                <img src="../../assets/no-results@3x.png">
                <p>No Teams Found</p>
            </div>
            <MyTeams :myTeamAddedItems="myTeamAddedItems" class="my-teams"></MyTeams>
        </div>
    </div>
</template>

<script>
import TeamsList from './TeamsList.vue'
import MyTeams from './MyTeams.vue'
export default {
    components: {
        TeamsList,
        MyTeams
    },
    data() {
        return {
            teamData: [],
            search: '',
            myTeamAddedItems: []
        }
    },
    mounted() {
        this.getTeamIngo()
        window.aaa = this
    },
    computed: {
        filteredList() {
            return this.teamData?.filter((v) => {
                return v.name.toLocaleLowerCase().match(this.search.toLocaleLowerCase()) || 
                v.stadium.toLocaleLowerCase().match(this.search.toLocaleLowerCase()) ||
                v.leagues.join().toLocaleLowerCase().match(this.search.toLocaleLowerCase())
            })
        } 
    },
    methods: {
        async getTeamIngo() {
            try {
                const response = await fetch('https://run.mocky.io/v3/ef80523b-0474-4104-8fe6-fe92f8360b28');
                this.teamData = await response.json()
            } 
            catch (error) {
                console.log('There was an error', error);
            }
        },
        deleteSearch() {
            this.search = ''
        },
        fallow(item) {      
            if (Array.isArray(this.myTeamAddedItems)) {
                this.myTeamAddedItems.push(item)
            }
            console.log('1111', this.myTeamAddedItems)
        },
        deleteItem(item) {
            const newItem = this.myTeamAddedItems.filter(v => v.id !== item.id)
            this.myTeamAddedItems = newItem
            console.log('this.myTeamAddedItems', this.myTeamAddedItems)
        }
    }
}
</script>

<style lang="scss" scoped>
.main-container {
    margin: auto;
    width: 600px;
    .info-header {
        display: flex;
        justify-content: start;
        align-items: center;
        height: 153px;
        background-color: #112948;
        margin-top: 16px;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        padding: 0 20px 0 42px;
        gap: 20px;

        .player {
            display: flex;
            flex-direction: column;
            gap: 6px;

            .level {
                color: #FFF;
                font-size: 10px;
                background-color: #1E3554;
                border-radius: 8px;
                padding: 2px 0;
            }
        }

        .player-name {
            color: #FFF;
            font-family: 'Montserrat' sans-serif;
            font-weight: bold;
            font-style: italic;
        }
        }

    .nav-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        background-color: #112948;

        a {
            height: 50px;
            display: flex;
            align-items: center;
            color: #FFF;
            text-decoration: none;
            padding: 0 12px;

            &:focus {
                border-bottom: 3px solid #00B1FF;
            }
        }

        // .active {
            
        // }
    }

    .search-container {
        background-color: #FFF;
        .search-text {
            display: flex;
            padding: 16px;
            font-weight: bold;
            font-style: italic;
            color: #1A3150;
            font-size: 14px;   
        }

        .search-input {
            position: relative;
            margin-bottom: 10px;
        }
        .search-icon {
            position: absolute;
            bottom: 10px;
            left: 28px;
        }

        input {
            width: 570px;
            height: 36px;
            background: #F5F7F9;
            border: none;
            border-radius: 16px;
            padding-left: 38px;

            &:focus-visible {
                outline: none;
            }
        }

        .close-img {
            position: absolute;
            top: 12px;
            right: 25px;
            cursor: pointer;
        }

        .my-teams {
            border-top: 8px solid #E1E7ED;
            padding-bottom: 10px;
        }

        .no-results {
            padding-bottom: 20px;

            img {
                margin: 20px 0 10px;
                width: 145px;
                height: 77px;
            }

            p {
                color: #6F8CAA;
                font-size: 12px;
            }
        }
    }

}
  
@media screen and (max-width: 600px) {
  .main-container, .search-container {
    width: 375px;
  }

  .main-container {
    .info-header {
        justify-content: center;
        margin-top: 0;
        border-top-right-radius: 0;
        border-top-left-radius: 0;

        .player-name {
            display: none;
        }
    }
  }

  .search-input {
    input {
        max-width: 346px;
    }
  }
}
</style>