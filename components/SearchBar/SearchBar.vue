<script lang="tsx">
import MenuSearch from "~/assets/imgs/menu_search.svg";
import CustomSelect from "~/components/CustomSelect/CustomSelect.vue";
import CustomOption from "~/components/CustomOption/CustomOption.vue";
export default defineComponent({
    name: 'SearchBar',
    props: {
        type: {
            type: String,
            default: "select",
        },
        width: {
            type: Number,
            default: 550,
        },
        placeholder: {
            type: String,
        },
    },
    setup(props, { emit, slots }) {
        const route = useRoute()
        const { type, width, placeholder } = props;
        const options = ref([]);
        const list = ref([])
        const states = reactive([
            "王者荣耀",
            "跑跑卡丁车111",
            "原神",
            "英雄联盟",
            "王者荣耀2",
            "王者荣耀3",
            "王者荣耀4",
            "王者荣耀5",
        ]);
        const signs = slots.signs && slots.signs()

        const searchWrapStyle = {
            width: `${width}px`,
        };

        const keyword = ref(route.params.keyword);
        const clsName = keyword ? "search-value" : "placeholder";

        const placeholderHandler = () => {
            console.log("点击placeholder");
            emit("placeholder");
            keyword.value = ''
            emit("change", keyword.value);
        }

        const onSearch = () => {
            emit("search", keyword.value);
        }

        const remoteMethod = (query: string) => {
            emit("change", query);
            if (query !== "") {
                setTimeout(() => {
                    options.value = list.value.filter((item: any) => {
                        return (
                            item.label
                                .toLowerCase()
                                .indexOf(query.toLowerCase()) > -1
                        );
                    });
                    // console.log("this.options", this.options);
                }, 200);
            } else {
                options.value = [];
            }
        }
        const createContent = () => {
            if (type === "navbar") {
                return (
                    <div onClick={placeholderHandler} class={clsName}>
                        {keyword.value || placeholder}
                    </div>
                );
            }
            if (type === "select") {
                const _options = options.value.map((item: any) => {
                    return (
                        <CustomOption
                            label={item.label}
                            value={item.value}
                        ></CustomOption>
                    );
                });
                return (
                    <CustomSelect
                        popper-class="popper-navbar-search-select"
                        noborder
                        filterable
                        remote
                        remote-method={remoteMethod}
                        v-model={keyword}
                        style={searchWrapStyle}
                        placeholder={placeholder}
                    >
                        {_options}
                    </CustomSelect>
                );
            }
        };

        onMounted(() => {
            list.value = states.map((item) => {
                return { value: `${item}`, label: `${item}` };
            });
        });

        return () => (
            <div class="search-bar" style={searchWrapStyle}>
                {
                    createContent()
                }
                {
                    <div class="signs">{signs}</div>
                }
                {
                    <div class="search-button" onClick={onSearch}>
                        <img
                            src={MenuSearch}
                            alt="search_button"
                        />
                    </div>
                }
            </div>
        )
    }
})
</script>

<style lang="scss" scoped>
.search-bar {
    display: flex;
    position: relative;
    height: 50px;
    // line-height: 50px;
    font-size: 16px;
    box-sizing: border-box;
    border: 2px solid $c3b8;
    background: #ffffff;
    border-radius: 25px;
    color: #999;
    // padding-left: 20px;
    align-items: center;

    .placeholder {
        min-width: 255px;
        text-indent: 20px;
    }

    .search-value {
        text-indent: 20px;
        min-width: 255px;
        color: $c333;
    }

    .signs {
        position: absolute;
        right: 70px;
    }
    .search-button {
        position: absolute;
        width: 70px;
        height: 100%;
        background: $c3b8;
        justify-content: center;
        display: flex;
        align-items: center;
        box-shadow: 0px 2px 10px 0px rgb(59 140 254 / 50%);
        border-radius: 25px;
        box-sizing: border-box;
        z-index: 2;
        top: 0;
        right: -3px;
        cursor: pointer;
        &:hover {
            opacity: 0.9;
        }
    }
}
</style>
