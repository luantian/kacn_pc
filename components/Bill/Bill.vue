<template>
    <div>
        <div class="p_btnBox k_userBtnBox">
            <a href="javascript:;" class="p_btn p_btnBgBlue p_btnSmall" @click="visible = true">
                +添加新账单地址
            </a>
        </div>
        <ul class="k_userBillList">
            <li class="k_userBillListA">
                <p class="k_userBillTitle">
                    <span>Zhao Qianqian</span>
                    <span>157****7788</span>
                    <span>999002</span>
                </p>
                <p class="k_userBillText">
                    <span>United States</span><span>New York</span><span>Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles</span>
                </p>
                <p class="k_userBillText2">555 Lexington Avenue, 10th Floor, Room 202 555 Lexington Avenue, 10th Floor, Room 202 555 Lexington Avenue, Lexington Avenu Lexington Avenu 10th Floor, Room 202</p>
                <p class="k_userBillBtn">
                    <span>
                        <button class="p_linkBlack js_bill_default" type="button" name="button">设为默认地址</button>
                    </span>
                    <button class="p_linkBlack js_bill_edit" type="button" name="button">编辑</button>
                    <button class="p_linkBlack js_bill_del" type="button" name="button">删除</button>
                </p>
            </li>
            <li>
                <p class="k_userBillTitle">
                    <span>Zhao Qianqian</span>
                    <span>157****7788</span>
                    <span>999002</span>
                </p>
                <p class="k_userBillText">
                    <span>United States</span><span>New York</span><span>Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles</span>
                </p>
                <p class="k_userBillText2">555 Lexington Avenue, 10th Floor, Room 202 555 Lexington Avenue, 10th Floor, Room 202 555 Lexington Avenue, Lexington Avenu Lexington Avenu 10th Floor, Room 202</p>
                <p class="k_userBillBtn">
                    <span>
                        <button class="p_linkBlack js_bill_default" type="button" name="button">设为默认地址</button>
                    </span>
                    <button class="p_linkBlack js_bill_edit" type="button" name="button">编辑</button>
                    <button class="p_linkBlack js_bill_del" type="button" name="button">删除</button>
                </p>
            </li>
            <li>
                <p class="k_userBillTitle">
                    <span>Zhao Qianqian</span>
                    <span>157****7788</span>
                    <span>999002</span>
                </p>
                <p class="k_userBillText">
                    <span>United States</span><span>New York</span><span>Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles</span>
                </p>
                <p class="k_userBillText2">555 Lexington Avenue, 10th Floor, Room 202 555 Lexington Avenue, 10th Floor, Room 202 555 Lexington Avenue, Lexington Avenu Lexington Avenu 10th Floor, Room 202</p>
                <p class="k_userBillBtn">
                    <span>
                        <button class="p_linkBlack js_bill_default" type="button" name="button">设为默认地址</button>
                    </span>
                    <button class="p_linkBlack js_bill_edit" type="button" name="button">编辑</button>
                    <button class="p_linkBlack js_bill_del" type="button" name="button">删除</button>
                </p>
            </li>
        </ul>
        <!-- 暂无 -->
        <!-- <div class="p_null">
            <img src="~assets/imgs/default_fk.png">
            <span>暂无账单地址</span>
            <p>“您当前还没有账单地址信息哦～”</p>
            <div class="p_btnBox p_btnBoxW150">
                <a href="javascript:;" class="p_btn p_btnBgBlue p_btnSmall js_bill_deploy">
                    +添加新账单地址
                </a>
            </div>
        </div> -->
        <CustomDialog :visible.sync="visible" width="690px" title="+Add New Billing Address" border>
            <div class="k_newAdsContentBox">
                <div class="k_newAdsContent">
                    <div class="k_newAdsTitleBox">
                        <div class="k_newAdsTitle">
                            <p class="p_req">Name</p>
                            <span> （请填写英文/拼音以提升支付通过率）</span>
                        </div>
                    </div>
                    <div class="k_newAdsInf">
                        <div class="p_iptList js_IptBor">
                            <el-input v-model="input" placeholder="First Name"></el-input>
                            <div class="p_iptTips">Please choose your country</div>
                        </div>
                        <div class="p_iptList js_IptBor">
                            <el-input v-model="input" placeholder="Last Name"></el-input>
                            <div class="p_iptTips">Please choose your country</div>
                        </div>
                    </div>
                    <div class="k_newAdsTitleBox">
                        <div class="k_newAdsTitle">
                            <p class="p_req">Country/Region</p>
                        </div>
                    </div>
                    <div class="k_newAdsInf">
                        <div class="p_iptList js_IptBor">
                            <ul class="posr">
                                <li class="p_iptView">
                                    <el-input v-model="input" placeholder="Choose your country"></el-input>
                                </li>
                                <!-- 字母检索 -->
                                <li class="k_newAdsScreen js_address_screen">
                                    <div class="k_newAdsScreenHead js_tabs_head">
                                        <p class="k_userTabsA fw">热门国家</p>
                                        <p class="">ABC</p>
                                        <p class="">DEF</p>
                                        <p class="">GHI</p>
                                        <p class="">JKL</p>
                                        <p class="">MNO</p>
                                        <p class="">PQR</p>
                                        <p class="">STU</p>
                                        <p class="">VWX</p>
                                        <p class="">YZ</p>
                                    </div>
                                    <div>
                                        <div class="k_newAdsScreenHot js_tabs_lists">
                                            <p>
                                                <span class="js_country_sel">Canada</span>
                                            </p>
                                            <p>
                                                <span class="js_country_sel">United Kingdom</span>
                                            </p>
                                        </div>
                                        <div class="k_newAdsScreenListBox js_tabs_lists">
                                            <p class="k_newAdsScreenListTitle">A</p>
                                            <div class="k_newAdsScreenList">
                                                <p>
                                                    <span class="js_country_sel">Afghanistan</span>
                                                </p>
                                                <p>
                                                    <span class="js_country_sel">Aland</span>
                                                </p>
                                                <p>
                                                    <span class="js_country_sel">American Samoa</span>
                                                </p>
                                                <p>
                                                    <span class="js_country_sel">Albanla</span>
                                                </p>
                                            </div>
                                            <p class="k_newAdsScreenListTitle">B</p>
                                            <div class="k_newAdsScreenList">
                                                <p>
                                                    <span class="js_country_sel">Afghanistan</span>
                                                </p>
                                                <p>
                                                    <span class="js_country_sel">Aland</span>
                                                </p>
                                                <p>
                                                    <span class="js_country_sel">American Samoa</span>
                                                </p>
                                                <p>
                                                    <span class="js_country_sel">Albanla</span>
                                                </p>
                                            </div>
                                            <p class="k_newAdsScreenListTitle">C</p>
                                            <div class="k_newAdsScreenList">
                                                <p>
                                                    <span class="js_country_sel">Afghanistan</span>
                                                </p>
                                                <p>
                                                    <span class="js_country_sel">Aland</span>
                                                </p>
                                                <p>
                                                    <span class="js_country_sel">American Samoa</span>
                                                </p>
                                                <p>
                                                    <span class="js_country_sel">Albanla</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="k_newAdsScreenListBox js_tabs_lists">
                                            DEF
                                        </div>
                                        <div class="k_newAdsScreenListBox js_tabs_lists">
                                            GHI
                                        </div>
                                        <div class="k_newAdsScreenListBox js_tabs_lists">
                                            JKL
                                        </div>
                                        <div class="k_newAdsScreenListBox js_tabs_lists">
                                            MNO
                                        </div>
                                        <div class="k_newAdsScreenListBox js_tabs_lists">
                                            PQR
                                        </div>
                                        <div class="k_newAdsScreenListBox js_tabs_lists">
                                            STU
                                        </div>
                                        <div class="k_newAdsScreenListBox js_tabs_lists">
                                            VWX
                                        </div>
                                        <div class="k_newAdsScreenListBox js_tabs_lists">
                                            YZ
                                        </div>
                                    </div>
                                </li>
                                <!-- 国家搜索 -->
                                <li class="k_newAdsSearch js_address_search">
                                    <!-- 搜索中 -->
                                    <!-- <div class="shade_loading">
                                        <img class="shade_loadingBox" src="~assets/imgs/search_loading.png" alt="">
                                        <p class="shade_loadingText">正在搜索中</p>
                                    </div> -->

                                    <!-- 搜索后 -->
                                    <div class="k_newAdsSearchResult js_search_result">
                                        <p>China</p>
                                        <p>Australia</p>
                                        <p>Austria</p>
                                        <p>Argentina</p>
                                        <p>ARMENIA</p>
                                        <p>Aland</p>
                                    </div>

                                    <!-- 搜索无结果 -->
                                    <!-- <p class="k_newAdsSearchNo">对不起，无相关搜索结果</p> -->
                                </li>
                            </ul>
                            <div class="p_iptTips">Please choose your country</div>
                        </div>
                        <div class="p_iptList js_sel_no">
                            <el-select v-model="value" placeholder="State" popper-class="dataInput">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                            <div class="p_iptTips">Please choose your state</div>
                        </div>
                        <div class="p_iptList js_IptBor">
                            <el-input v-model="input" placeholder="City"></el-input>
                            <div class="p_iptTips">Please choose your country</div>
                        </div>
                    </div>
                    <div class="k_newAdsTitleBox">
                        <div class="k_newAdsTitle">
                            <p class="p_req">Address1</p>
                        </div>
                        <div class="k_newAdsTips">
                            <img src="~assets/imgs/icon/icon_translate.svg">
                            <a class="p_linkBlue" target="_blank" href="###">翻译助手？</a>
                        </div>
                    </div>
                    <div class="k_newAdsInf">
                        <div class="p_iptList js_IptBor">
                            <el-input
                              type="textarea"
                              maxlength="100"
                              placeholder="Street,Address,Company Name,apartment,unit,building,floor,etc"
                              v-model="textarea">
                            </el-input>
                            <div class="p_iptTips">Please choose your country</div>
                        </div>
                    </div>
                    <div class="k_newAdsTitleBox">
                        <div class="k_newAdsTitle">
                            <p class="p_req">Address2</p>
                        </div>
                    </div>
                    <div class="k_newAdsInf">
                        <div class="p_iptList js_IptBor">
                            <el-input
                              type="textarea"
                              maxlength="100"
                              placeholder="Street,Address,Company Name,apartment,unit,building,floor,etc"
                              v-model="textarea">
                            </el-input>
                            <div class="p_iptTips">Please choose your country</div>
                        </div>
                    </div>
                    <div class="k_newAdsTitleBox">
                        <div class="k_newAdsTitle">
                            <p class="p_req">Phone Number</p>
                        </div>
                        <div class="k_newAdsTitle">
                            <p class="p_req">Email</p>
                        </div>
                        <div class="k_newAdsTitle">
                            <p class="p_req">Post/Zip Code</p>
                        </div>
                    </div>
                    <div class="k_newAdsInf">
                        <div class="p_iptList js_IptBor">
                            <el-input v-model="input" placeholder="Phone Number"></el-input>
                            <div class="p_iptTips">Please choose your country</div>
                        </div>
                        <div class="p_iptList js_IptBor">
                            <el-input v-model="input" placeholder="Email"></el-input>
                            <div class="p_iptTips">Please choose your country</div>
                        </div>
                        <div class="p_iptList js_IptBor">
                            <el-input v-model="input" placeholder="Post/Zip Code"></el-input>
                            <div class="p_iptTips">Please choose your country</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="k_newAdsBottom">
                <div class="eavl_check">
                    <el-checkbox v-model="checked">Make this your primary address</el-checkbox>
                </div>
                <div class="p_btnBox">
                    <button class="p_btn p_btnBorBlue p_btnSmall js_address_close" type="button" name="button">Cancel</button>
                    <button class="p_btn p_btnBgBlue p_btnSmall" type="button" name="button">SAVE</button>
                </div>
            </div>
        </CustomDialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visible: false,
                options: [
                    {
                        value: '2020',
                        label: '2020'
                    },
                    {
                        value: '2021',
                        label: '2021'
                    },
                    {
                        value: '2022',
                        label: '2022'
                    },
                ],
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/styles/center.scss";
</style>
