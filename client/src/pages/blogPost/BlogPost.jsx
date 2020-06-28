import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import Nav  from '../../components/Nav'


const BlogPost = () => {

    const [comment, setComment] = useState({
        comment: '',
        ref: ''
    })

    return (
        <>
        <Nav />
        <div style={{border:'1px solid black'}}>
            <h1>title </h1>
            <p>Author</p>
            <p>Date Posted</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere rhoncus quam, at aliquam nibh pulvinar in. Quisque nisi sem, rhoncus vitae nulla nec, blandit fermentum eros. Nulla felis purus, faucibus volutpat orci nec, sagittis ornare tortor. In nec dapibus justo. Nulla facilisi. Proin nec mollis metus. Duis imperdiet scelerisque lacinia. Proin id odio maximus, commodo ex quis, rutrum sem. Duis ac eros sed mauris faucibus pretium bibendum pellentesque neque. Sed in tortor quis turpis interdum aliquet. Aliquam cursus ac enim at porta. Morbi ac imperdiet libero, sit amet mattis metus. Proin rutrum, est eu tempor molestie, augue nunc malesuada ex, a vulputate arcu nunc sit amet dui. Praesent blandit augue non purus malesuada efficitur. Nunc ut ornare augue, nec auctor lectus.
            Maecenas non nulla at mi tempus cursus eget consectetur ante. In vulputate pellentesque sapien eu posuere. Etiam vel fringilla eros, nec accumsan justo. Praesent finibus sollicitudin ante, sed tincidunt ipsum aliquet nec. Sed mollis turpis nisi, quis posuere lectus efficitur nec. Suspendisse at quam vel ex feugiat mattis eget nec ex. Nunc aliquet neque at arcu sagittis, sit amet ultricies quam imperdiet. Nullam ornare, massa at blandit facilisis, elit enim ultricies nibh, vitae sollicitudin justo metus eu velit. Curabitur fringilla arcu velit, vel suscipit urna lacinia id. Etiam ultrices, nunc sit amet varius tempus, enim est bibendum velit, eget sollicitudin sapien urna et quam. Curabitur eget turpis sit amet justo bibendum sollicitudin. Sed vestibulum condimentum sapien nec mollis.
            Aenean mattis metus non lorem placerat, quis convallis neque consequat. Etiam dapibus fringilla viverra. Donec tincidunt posuere suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper elit sagittis, venenatis arcu sit amet, pretium tortor. Mauris mollis odio orci, fermentum ultrices augue elementum id. Pellentesque aliquam sed nulla sed lobortis. Donec in magna ut elit pharetra molestie et a massa. Cras faucibus nulla vel tristique vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras fermentum non arcu vulputate accumsan. In iaculis, leo eleifend faucibus auctor, lorem quam convallis eros, ultrices tempor felis lacus ac dolor.<br/>
            Vivamus laoreet dolor nec tempor efficitur. Mauris vitae tellus sem. Morbi sed porta neque. Etiam aliquam mattis tortor a blandit. Etiam eu ex neque. Pellentesque ullamcorper fringilla tellus, ultrices elementum est porttitor vel. Suspendisse a dui felis. Donec pharetra, mauris eget vestibulum porttitor, eros turpis dictum urna, in fermentum elit ligula et leo. Sed malesuada, nisl dignissim facilisis suscipit, libero velit volutpat est, ut malesuada enim augue sed lorem.<br/>
            Maecenas bibendum accumsan metus eu luctus. In euismod, dolor quis consequat auctor, sem sem lobortis mauris, at dictum libero mi egestas quam. Morbi fringilla nibh sem, quis tempus nisl malesuada et. Donec aliquet faucibus elementum. Curabitur consequat sem dolor, et facilisis odio elementum in. Nam accumsan condimentum tincidunt. Sed porta fringilla nibh, quis venenatis augue aliquam et. Nunc sagittis, ante quis ultrices iaculis, quam elit hendrerit lectus, eu commodo velit enim sit amet justo. Pellentesque maximus laoreet lectus, nec imperdiet enim porta eleifend. Mauris auctor augue sed felis fringilla faucibus. Sed venenatis, tortor eget hendrerit condimentum, urna nunc blandit augue, ut blandit dui lorem eget dui. Ut molestie felis at augue euismod, id vehicula risus congue.
            </p>
             

        <div>
            <TextField 
                multiline
            />

        </div>

        </div>
        </>
    )
}

export default BlogPost
