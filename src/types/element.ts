import { ElDialog, ElForm } from 'element-plus'
import type { FormItemRule } from 'element-plus/es/tokens'

export type IDialog = InstanceType<typeof ElDialog> | null

export type IElForm = InstanceType<typeof ElForm> | null

export type IFormRule = Record<string, FormItemRule[]>
