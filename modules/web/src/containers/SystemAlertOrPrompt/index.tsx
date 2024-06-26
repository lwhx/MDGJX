import BackToTop from "@/containers/Layout/BackToTop"
import LoadableWrapper from "@/components/LoadableWrapper"
import MyAccount from "@/loadable/MyAccount"
import { FN_GetDispatch } from "@/store/nocycle"
import MemorySlice from "@/store/reducers/memorySlice"
import { Fn_MyAccount } from "@/systemModules"
import exportUtils from "@/utils/ExportUtils"
import { Modal, TextInput } from "@mantine/core"
import { useHistory } from "react-router"
import { Toaster } from "sonner"
import FavButton from "../Layout/FavButton"

export default () => {
    const hist = useHistory()
    const [showLoginModal] = exportUtils.useSelector(v => [
        v.memory.showLoginModal
    ])
    return <>
        <BackToTop />
        <FavButton/>
        <Toaster position="top-center" richColors />
        <Modal opened={showLoginModal} onClose={() => {
            FN_GetDispatch()(
                MemorySlice.actions.updateOneOfParamState({
                    showLoginModal: false
                })
            )
        }} title="请先登录">
            <LoadableWrapper id={'myacct'} fn={Fn_MyAccount} />
        </Modal>
        <LoadableWrapper disableLoadingText={true} id={'changelogviewer'} fn={()=>import('./ChangelogViewer')} />
    </>
}