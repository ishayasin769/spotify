const musicModel = require('../models/music.model');
const {uploadFile} = require('../services/storage.service');
const albumModel = require('../models/album.model');

const jwt = require('jsonwebtoken');



async function createMusic(req,res){
const {title, uri} = req.body;
const file = req.file;
const result = await uploadFile(file.buffer.toString('base64'));
const newMusic = await musicModel.create({
    title,
    uri: result.url,
    artist: req.user.id,
})
res.status(201).json({
    message: 'Music created successfully',
    music: {
        id: newMusic._id,
        title: newMusic.title,
        uri: newMusic.uri,
        artist: newMusic.artist
    }
}) 

} 


async function createAlbum(req,res){
        const {title,musicIds} = req.body;
        const newAlbum = await albumModel.create({
            title,
            musics: musicIds,
            artist: req.user.id
        });
        res.status(201).json({
            message: 'Album created successfully',
            album: {
                id: newAlbum._id,
                title: newAlbum.title,
                artist: newAlbum.artist,
                musics: newAlbum.musics
            }
        });

    } 

async function getAllMusics(req,res){
    const musics = await musicModel
    .find()
    // .skip(1)
    .limit(5)
    .populate('artist','username email');
    res.status(200).json({
        message: 'All musics fetched successfully',
        musics: musics.map(music => ({
            id: music._id,
            title: music.title,
            uri: music.uri,
            artist: music.artist
        }))
    });
}

async function getAllAlbums(req,res){
    const albums = await albumModel.find().select("title artist").populate('artist','username email').populate('musics','title uri');
    res.status(200).json({
        message: 'All albums fetched successfully',
        albums: albums.map(album => ({
            id: album._id,
            title: album.title,
            artist: album.artist,
            musics: album.musics
        }))
    });
}
async function getAlbumById(req,res){
    const albumId = req.params.id;
    const album = await albumModel.findById(albumId).populate('artist','username email').populate('musics','title uri');
    res.status(200).json({
        message: 'Album fetched successfully',
        album: {
            id: album._id,
            title: album.title,
            artist: album.artist,
            musics: album.musics
        }
    });
}

module.exports = {
    createMusic,
    createAlbum,
    getAllMusics,
    getAllAlbums,
    getAlbumById
};
