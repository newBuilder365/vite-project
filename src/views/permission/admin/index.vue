<template>
  <div v-loading="loading">
    <el-card class="box-card-search">
      <template #header>
        <div class="card-header">
          <span>数据筛选</span>
        </div>
      </template>
      <div>
        <label>状态</label>
        <el-select
          v-model="params.status"
          class="m-2"
          placeholder="Select"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <label>管理员名称</label>
        <el-input
          class="nameInput"
          v-model="params.name"
          placeholder="请输入身份昵称"
        />
        <el-button
          :icon="Search"
          @click="loadData"
          type="primary"
        >
          查询
        </el-button>
      </div>
    </el-card>
    <el-card
      class="box-card-content"
    >
      <template #header>
        <div class="card-header">
          <el-button
            type="primary"
            @click="handleOperate(null)"
          >
            添加管理员
          </el-button>
        </div>
      </template>
      <div>
        <el-table
          :data="tableData"
          stripe
          row-key="id"
          style="width: 100%"
        >
          <el-table-column
            prop="id"
            label="ID"
            width="180"
          />
          <el-table-column
            prop="account"
            label="姓名"
            width="180"
          />
          <el-table-column
            prop="real_name"
            label="账号"
          />
          <el-table-column
            prop="roles"
            label="身份"
          />
          <el-table-column
            prop="_last_time"
            label="最后一次登录时间"
          />
          <el-table-column
            prop="last_ip"
            label="最后一次登陆IP"
          />
          <el-table-column
            prop="status"
            label="状态"
          >
            <template #default="scope">
              <el-switch
                v-model="scope.row.status"
                :active-value="1"
                :inactive-value="0"
              />
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            align="center"
          >
            <template #default="scope">
              <el-button
                size="small"
                type="primary"
                @click="handleOperate(scope.row.id)"
                text
              >
                编辑
              </el-button>
              <el-button
                size="small"
                type="danger"
                text
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <AppPagination
            v-model:page="params.page"
            v-model:limit="params.limit"
            :total="total"
            :load-data="loadData"
          />
        </div>
      </div>
    </el-card>
    <AdminForm
      v-model="dialogVisible"
      :admin-id="adminId"
      @handle-success="handleSuccess"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { getAdmin } from '@/api/setting'
import { IAdminRes, IAdminQuery } from '@/types/setting'
import { Search } from '@element-plus/icons-vue'
import AdminForm from './AdminForm.vue'

const loading = ref(false)

const params = reactive({
  page: 1,
  limit: 20,
  status: '' as IAdminQuery['status'],
  name: ''
})
const total = ref(0)

const dialogVisible = ref(false)
const adminId = ref<number|null>(null)

const tableData = ref<IAdminRes[]>([])
const options = [
  {
    value: '',
    label: '全部'
  },
  {
    value: 1,
    label: '启用'
  },
  {
    value: 0,
    label: '停用'
  }
]

const loadData = async () => {
  loading.value = true
  const res = await getAdmin(params).finally(() => {
    loading.value = false
  })
  if (res.status === 200) {
    tableData.value = res.data.list
    total.value = res.data.count
  }
}

onMounted(() => {
  loadData()
})

const handleOperate = (id:null|number) => {
  dialogVisible.value = true
  adminId.value = id
}

const handleSuccess = () => {
  dialogVisible.value = false
}

</script>

<style lang="scss" scoped>
.box-card-search {
  margin-bottom: 20px;
}
.m-2 {
  margin: 0 10px;
}

.nameInput {
  width: 200px;
  margin: 0 10px;
}

.pagination {
  margin-top: 10px;
  display: flex;
  justify-content: end;
}
</style>
