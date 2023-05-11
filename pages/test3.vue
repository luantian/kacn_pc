<script lang="tsx">
export default defineComponent({
    name: "Text3",
    setup(props) {
        const render1 = () => {
            if (state.active === 0) {
                state.value = 1;
            }
            if (state.active === 1) {
                state.value = 0;
            }
            console.log("state.value", state.value);
            return <div>{state.value}</div>;
        };

        const onChange = () => {
            state.active = state.active === 0 ? 1 : 0
        };

        return () => (
            <div>
                {render1()}
                <div>
                    <CustomButton
                        onClick={() => {
                            onChange();
                        }}
                    >
                        测试1
                    </CustomButton>
                </div>
            </div>
        );
    },
});

const state = reactive({
    active: 0,
    value: 1,
});
const onChange = () => {
    console.log("onChange");
    state.active = state.active === 1 ? 0 : 1;
};
</script>

<style></style>
