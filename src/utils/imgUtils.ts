import storage from 'good-storage'
export class ImgUtil {
  static imgList: Record<string, string> = {}

  static storageImgList() {
    this.imgList = storage.get('imgList') || {}
    if (this.isEmpty()) {
      this.loadAllImg()
      storage.set('imgList', this.imgList)
    }
  }
  static isEmpty() {
    return !Object.getOwnPropertyNames(this.imgList).length
  }
  static getImg(imgName: string) {
    return ImgUtil.imgList[imgName]
  }

  static loadAllImg() {
    const imgMap: Record<string, any> = import.meta.glob('../assets/img/**/*.png', { eager: true })
    let absolutePath: string = ''
    let imgName: string = ''
    for (const relativePath in imgMap) {
      absolutePath = imgMap[relativePath].default
      imgName = absolutePath.substring(absolutePath.lastIndexOf('/') + 1)
      this.imgList[imgName] = absolutePath
    }

    //自实现方法
    // for (const relativePath in imgMap) {
    //   absolutePath = imgMap[relativePath]
    //     .toString()
    //     .substring(
    //       imgMap[relativePath].toString().indexOf('"') + 1,
    //       imgMap[relativePath].toString().indexOf('?')
    //     )
    //   imgName = relativePath.substring(relativePath.lastIndexOf('/') + 1)
    //   this.imgList[imgName] = absolutePath
    // }
  }
}
