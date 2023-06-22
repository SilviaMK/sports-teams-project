<template>
    <div class="my-teams-container">
        <div class="label">
            MY TEAMS
        </div>
        <div v-if="myTeamAddedItems.length">
            <div  class="added-teams" v-for="item in myTeamAddedItems" :key="item.id">
                <img src="../../assets/team-placeholder.png">
               <span>{{ item.name }}</span> 
            </div>
        </div>
        <div v-else class="no-data-placeholder">You aren't following any teams yet.</div>
    </div>
    
</template>

<script>
export default {
    props: {
        myTeamAddedItems: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-teams-container {

        .label {
            display: flex;
            padding: 16px;
            font-weight: bold;
            font-style: italic;
            color: #1A3150;
            font-size: 14px; 
        }

        .no-data-placeholder {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            height: 90px;
            background-color: #F5F7F9;
            color: #6F8CAA;
            border-radius: 8px;
            margin: 0 10px;
        }

        .added-teams {
            display: flex;
            align-items: center;
            padding-left: 16px;
            margin-bottom: 10px;

            img {
                width: 28px;
                height: 28px;
                background-color: #F5F7F9;
                padding: 6px;
                margin-right: 10px;
                border-radius: 50%;
            }
        }
       
    }
</style>