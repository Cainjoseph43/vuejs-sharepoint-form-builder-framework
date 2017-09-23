// @flow

export default {
    template: `
        <div>
            <el-input-number :name="name" v-validate="rules" v-model="model" :controls="false" size="small" @change="change"></el-input-number>
            <div>
                <span v-show="veeErrors.has(name)">{{ veeErrors.first(name) }}</span>
            </div>
        </div>
    `,
    props: ['value', 'rules', 'name'],
    data () {
        return {
            model: null
        }
    },
    methods: {
        change (value) {
            setTimeout(() => {
                this.model = value|0
                this.$emit('input', value)
                this.$emit('change', value)
            }, 50)
        }
    },
    mounted() {
        this.model = this.value
    }
}
