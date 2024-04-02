/*
 * @Author: Chen HuaKang
 * @Date: 2024-03-21 15:43:11
 * @LastEditors: Chen HuaKang
 * @LastEditTime: 2024-04-01 16:13:03
 * @Description: 
 */
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
const features = [
  {
    name: '推送部署',
    description:
      '上传后有自动部署及手动部署设置',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL 证书',
    description:
      '需要证书校验对比，多层防护信息安全',
    icon: LockClosedIcon,
  },
  {
    name: '简单队列',
    description:
      '队列合理有序进行处理上线',
    icon: ArrowPathIcon,
  },
  {
    name: '高级安全性',
    description:
      '保证好发布不被干扰，减少入侵攻击',
    icon: FingerPrintIcon,
  },
]

const FeatureSections = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">更快地部署</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            部署应用程序所需的一切
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FeatureSections